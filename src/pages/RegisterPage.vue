<script setup lang="ts">
    import RegisterForm from '@/components/RegisterForm.vue';
    import { registerUser } from '@/services/AuthService';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    async function handleRegister(username:string, password:string, confirmPassword: string){
        registerUser(username, password, confirmPassword, router);
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
                    Register to our app
                </p>
            </div>

            <RegisterForm @submit-register="handleRegister"></RegisterForm>

        </div>
    </div>


</template>

<style scoped>

</style>