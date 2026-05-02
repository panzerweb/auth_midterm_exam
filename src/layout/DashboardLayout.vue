<script setup lang="ts">

import { useRouter, type Router } from 'vue-router';

const router:Router = useRouter();

function logout():void{
  localStorage.removeItem('username');
  router.replace('/');
  return;
}

</script>

<template>
  <nav class="bg-green-800 py-6">
    <div class="flex mx-8 justify-between">
      <h1 class="font-bold text-gray-100 italic">HashSaltPepper</h1>

      <div class="flex justify-around gap-4">
        <div>
          <RouterLink to="/dashboard" active-class="text-yellow-500" class="text-gray-50">
            <p class="font-semibold">Home</p>
          </RouterLink>
        </div>
        <div class="mx-auto">
          <button type="button" @click="logout" class="text-gray-100 cursor-pointer hover:text-red-500 transition">
            <i class="pi pi-power-off" style="font-size: 1.5rem"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>