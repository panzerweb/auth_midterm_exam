<script setup lang="ts">

import { ref } from 'vue';
import { labelTailWindClass, inputTailWindClass } from '@/styles/GlobalStyles';


const username_value = ref('');
const password_value = ref('');

const emit = defineEmits<{
    (
        // First parameter, very important from submit-login, it will be identified in the parent component as onSubmitLogin
        event: 'submit-login', 
        // Second parameter, the values you want to pass on
        username: string, 
        password: string
    ): void
}>();

function submitForm(){
    // Now we use the emit to pass on the parameters
    emit('submit-login', username_value.value, password_value.value)
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm" class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label for="username" v-bind="labelTailWindClass">Username</label>
                    <input 
                        type="text" 
                        v-model="username_value" 
                        name="username" id="username" 
                        placeholder="Enter username"
                        required="true"
                        v-bind="inputTailWindClass">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label for="password" v-bind="labelTailWindClass">Password</label>
                    <input 
                        type="password" 
                        v-model="password_value" 
                        name="password" 
                        id="password" 
                        placeholder="Enter password"
                        required="true"
                        v-bind="inputTailWindClass">
                </div>
            </div>

            <button type="submit" class="bg-green-800 p-4 rounded-lg text-gray-100 text-lg font-semibold w-full">Login</button>
        </form>
    </div>
</template>

<style scoped>

</style>