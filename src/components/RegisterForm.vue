<script setup lang="ts">

import { ref } from 'vue';
import { labelTailWindClass, inputTailWindClass } from '@/styles/GlobalStyles';

const emit = defineEmits<{
    (event:'submit-register', username: string, password: string, confirmPassword: string):void
}>();

const username= ref('');
const password = ref('');
const confirm_pass = ref('')

function submitForm(){
    emit('submit-register', username.value, password.value, confirm_pass.value)
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label for="username" v-bind="labelTailWindClass">Username</label>
                    <input type="text" v-model="username" name="username" id="username" placeholder="Enter username" v-bind="inputTailWindClass" required="true">
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label for="password" v-bind="labelTailWindClass">Password</label>
                    <input type="password" v-model="password" name="password" id="password" placeholder="Enter password" v-bind="inputTailWindClass" required="true">               
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label for="password" v-bind="labelTailWindClass">Confirm Password</label>
                    <input type="password" v-model="confirm_pass" name="confirm_pass" id="confirm_pass" placeholder="Confirm Password" v-bind="inputTailWindClass" required="true">
                </div>
            </div>


            <button type="submit" class="bg-green-800 p-4 rounded-lg text-gray-100 text-lg font-semibold w-full">Register</button>
        </form>
    </div>
</template>

<style scoped>

</style>