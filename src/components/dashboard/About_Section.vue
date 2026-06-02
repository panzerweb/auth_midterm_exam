<script setup lang="ts">

export interface Developers {
    name: string;
    codename: string;
    role: string;
    focus: string;
}

const developerData : Developers[] = [
    {
        name: 'Romeo Selwyn M. Villar',
        codename: 'Panzerweb',
        role: 'Frontend Developer',
        focus: 'Authentication UI & Guard Routes',
    },
    {
        name: 'Alex Arnais Aparece',
        codename: 'Etriii',
        role: 'Backend Developer',
        focus: 'Authentication Logic and Security Implementation',
    },
    {
      name: 'Charlene Calamba',
      codename: 'Shixxcvb',
      role: 'Technical Writer',
      focus: 'Documentation and Technical Writing'
    }
]

</script>

<template>
  <section class="grid md:grid-cols-2 gap-8 mt-8">
    
    <!-- About Project -->
    <div class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-3 text-gray-800">
        About This Project
      </h2>
      <p class="text-gray-600 leading-relaxed">
        This is a simple authentication system built using Vue and TypeScript
        as part of a cybersecurity course activity. It demonstrates secure
        login and registration using password hashing, salting, and peppering
        techniques.
      </p>

      <p class="text-gray-600 mt-3 leading-relaxed">
        The goal of this project is to understand how sensitive user credentials
        are protected and how authentication flows work in modern web applications.
      </p>

      <ul class="list-disc ml-5 mt-3 text-gray-600 text-sm">
        <li>Password hashing (e.g. bcrypt)</li>
        <li>Salted credentials</li>
        <li>Server-side validation</li>
    </ul>
    </div>

    <!-- Developers -->
    <div class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">
        Developers
      </h2>

      <div class="space-y-4 my-2" v-for="developer in developerData">
        <!-- Developer Card -->
        <div class="p-4 border rounded-xl">
          <h3 class="font-semibold text-gray-700">
            {{ developer.name }}
          </h3>
          <p class="text-sm text-gray-500">
            {{ developer.role }}
          </p>
          <p class="text-sm text-gray-500">
            {{ developer.focus }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>