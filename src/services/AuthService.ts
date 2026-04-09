import type { Router } from "vue-router";

export function registerUser(username:string, password:string, confirmPassword: string, router: Router):boolean{
    if (username == '' || password == '') {
        console.log("Username and password are both required")
        return false;
    }

    if (password != confirmPassword) {
        console.log("Passwords aren't matched. Please try again!")
        return false;
    }

    console.log("Successfully registered!");
    router.push('/')

    return false
}

export function loginUser(username: string, password: string, router: Router): boolean{
    if (username == '' || password == '') {
        console.log("Requires both an username and password, please try again!")
        return false;
    }

    console.log(`Successfully logged in! username: ${username}`)
    console.log("Now going to the dashboard")
    router.push('/dashboard')


    return false;
}