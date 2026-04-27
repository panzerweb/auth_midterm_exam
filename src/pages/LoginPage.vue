<script setup lang="ts">
    import LoginForm from '@/components/LoginForm.vue';
    import { loginUser } from '@/services/AuthService';
    import type { PostData } from '@/types/types';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    async function handleLogin(username:string, password:string){
        const sendData:PostData = {
            username: username,
            password: password,
        }
        loginUser(sendData, router);
    }

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-12 rounded-2xl shadow-xl text-center border-2 border-green-950">
            <div class="mt-4 mb-8">
                <h1 class="text-2xl font-bold text-gray-800">
                    Cybersecurity Auth Midterm Exam
                </h1>
                <p class="text-gray-500 mt-2">
                    Login to your account now
                </p>
            </div>

            <LoginForm @submit-login="handleLogin"></LoginForm>

            <RouterLink to="/register" active-class="text-yellow-500" class="text-gray-900">
                <p class="mt-4">Don't have an account <span class="font-semibold text-green-900">Register Now</span></p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>