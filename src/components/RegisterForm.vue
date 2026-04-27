<script setup lang="ts">

import { ref } from 'vue';
import { labelTailWindClass, inputTailWindClass } from '@/styles/GlobalStyles';
import { checkStrength } from '@/utils/Strength_Checker';

const emit = defineEmits<{
    (event:'submit-register', username: string, password: string, confirmPassword: string):void
}>();

const username= ref('');
const password = ref('');
const confirm_pass = ref('')

function submitForm(){
    emit('submit-register', username.value, password.value, confirm_pass.value)
}

// Password meter logic
const passwordMeterLabel = ref('');
const passwordMeterColor = ref('');

async function passwordMeter(password: string) {
    let result = checkStrength(password);

    passwordMeterLabel.value = result.label!;
    passwordMeterColor.value = result.color!;
}

</script>

<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label for="username" v-bind="labelTailWindClass">Username</label>
                    <input type="text" v-model="username" name="username" id="username" placeholder="Enter username" v-bind="inputTailWindClass" required="true">
                </div>
                <div class="w-full px-3">
                    <label for="password" v-bind="labelTailWindClass">Password</label>
                    <input type="password" v-on:input="passwordMeter(password)" v-model="password" name="password" id="password" placeholder="Enter password" v-bind="inputTailWindClass" required="true">               
                </div>
                <div class="my-4 mx-4 text-left font-semibold" v-bind:class="passwordMeterColor" id="password-div">
                    <!-- Here is the password meter render -->
                     {{ passwordMeterLabel }}
                </div>
                <div class="w-full px-3">
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