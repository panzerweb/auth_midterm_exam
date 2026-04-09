<script setup lang="ts">
  console.log("Started the application");
</script>

<template>
  <nav class="bg-green-800 py-6">
    <div class="flex mx-8 justify-between">
      <div>
        <h1 class="font-bold text-gray-100 italic">HashSaltPepper</h1>
      </div>
      <div class="flex gap-4">
        <RouterLink to="/" active-class="text-yellow-500" class="text-gray-50">
          <p class="font-semibold">Login</p>
        </RouterLink>
        <RouterLink to="/register" active-class="text-yellow-500" class="text-gray-50">
          <p class="font-semibold">Register</p>
        </RouterLink>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
