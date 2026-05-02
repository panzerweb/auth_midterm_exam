<script setup lang="ts">

import About_section from '@/components/dashboard/about_section.vue';
import { ref } from 'vue';
import { useRouter, type Router } from 'vue-router';

const router:Router = useRouter();
let loggedInUsername:string = localStorage.getItem('username') ?? 'User';

let username= ref(loggedInUsername.replace(/['"]+/g, ''));

</script>

<template>
    <div class="min-h-screen mx-12 my-6">
        <div class="mb-6">
            <h1 class="text-2xl md:text-4xl font-bold text-gray-800">
                Welcome, {{username}}
            </h1>
        </div>
        
        <!-- About Section -->
        <About_section></About_section>
    </div>
</template>

<style scoped>

</style>