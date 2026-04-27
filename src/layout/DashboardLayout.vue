<template>
  <nav class="bg-green-800 py-6">
    <div class="flex mx-8 justify-between">
      <h1 class="font-bold text-gray-100 italic">HashSaltPepper</h1>

      <div class="flex gap-4">
        <RouterLink to="/dashboard" active-class="text-yellow-500" class="text-gray-50">
          <p class="font-semibold">Home</p>
        </RouterLink>
      </div>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>