<script setup lang="ts">

import About_section from '@/components/dashboard/About_Section.vue';
import Cyber_Threats_Section from '@/components/dashboard/Cyber_Threats_Section.vue';
import Why_Security_Section from '@/components/dashboard/Why_Security_Section.vue';
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

        <!-- Why Security is Important -->
         <Why_Security_Section></Why_Security_Section>

        <!-- Cyber Threats Section -->
        <Cyber_Threats_Section></Cyber_Threats_Section>
        
    </div>
</template>

<style scoped>

</style>