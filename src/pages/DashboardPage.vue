<script setup lang="ts">

import { ref } from 'vue';
import { useRouter, type Router } from 'vue-router';

const router:Router = useRouter();

let countDown = ref(5);

function countDownTimerToLogout(counter: number):void{
    countDown.value = counter;

    console.log(countDown.value);
    if (countDown.value === 0) {
        console.log('Count down completed.');
        router.replace('/');
        return;
    }
    setTimeout(() => {
        countDownTimerToLogout(countDown.value - 1);
    }, 1000);
}

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-12 rounded-2xl shadow-xl text-center border-2 border-green-950">
            <div class="mt-4 mb-8">
                <h1 class="text-2xl font-bold text-gray-800">
                    Welcome, User
                </h1>

                <div class="mt-4 mb-2">
                    <button type="button" @click="countDownTimerToLogout(countDown)" class="border-2 border-red-500 py-2 px-6 rounded-lg text-red-800 hover:bg-red-400 hover:text-red-900 cursor-pointer">
                        Logout
                    </button>

                    <div class="mt-4 mb-2">
                        <p class="font-semibold">
                            Logging out in <span class="text-red-500">{{ countDown }}</span> seconds
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>