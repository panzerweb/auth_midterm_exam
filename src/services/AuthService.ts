import type { Router } from "vue-router";
import Swal from "sweetalert2";

import { globalMixin } from "@/components/SweetAlert_Mixin";
import { API_URL_DEV } from "./config";

// Endpoints from API
const LOGIN_PATH: string = "api/auth/login/";
const REGISTER_PATH: string = "api/auth/register/";

// Interface to define request schema to the API
export interface PostData {
    username: string;
    password: string;
}

/*
    Register function, sending request to the API
*/
export async function registerUser(data: PostData, confirmPassword: string, router: Router):Promise<boolean>{
    const trimmedUsername = data.username.trim();
    const trimmedPassword = data.password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (trimmedUsername == '' || trimmedPassword == '' || !trimmedConfirmPassword) {
        console.log("Username and password are both required")
        globalMixin("error", "All fields are required!")
        return false;
    }

    if (trimmedPassword != trimmedConfirmPassword) {
        console.log("Passwords aren't matched. Please try again!")
        globalMixin("error", "Passwords aren't matched. Please try again!")
        return false;
    }
    
    try {
        const response: Response = await fetch(`${API_URL_DEV}${REGISTER_PATH}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: trimmedUsername,
                password: trimmedPassword,
            })
        });

        const res = await response.json()

        if (!response.ok) {
           globalMixin("error", res.message || "Register failed")
           return false;
        }

        console.log(res);
        globalMixin("success", res.message || "Register successful!");

        setTimeout(() => {
            router.push('/');
        }, 1000);

        return true;

    } catch (error:any) {
        console.error(`Fetch Error: ${error}`);
        globalMixin("error", "Something went wrong. Please try again.");
        return false;
    }

}

/*
    Login function, sending request to the API
*/
export async function loginUser(
    data: PostData,
    router: Router
): Promise<boolean> {

    const trimmedUsername = data.username.trim();
    const trimmedPassword = data.password.trim();

    if (!trimmedUsername || !trimmedPassword) {
        globalMixin("error", "Username and password are required.");
        return false;
    }

    try {
        const response: Response = await fetch(`${API_URL_DEV}${LOGIN_PATH}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: trimmedUsername,
                password: trimmedPassword,
            })
        });

        const res = await response.json();

        if (!response.ok) {
            globalMixin("error", res.error || "Login failed.");
            return false;
        }

        console.log(res);
        globalMixin("success", res.message || "Login successful!");

        localStorage.setItem('username', JSON.stringify(res.username));

        setTimeout(() => {
            router.push('/dashboard');
        }, 1000);

        return true;

    } catch (error:any) {
        console.error(`Fetch Error: ${error}`);
        globalMixin("error", "Something went wrong. Please try again.");
        return false;
    }
}