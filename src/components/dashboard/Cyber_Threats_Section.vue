<script setup lang="ts">
import { cyberThreats } from "@/assets/cyber_threats";
import type { CyberThreats } from "@/types/types";
import { ref, computed } from "vue";

const searchQuery = ref("");
const isOpen = ref(false);

// Reactive filtered results
const filteredThreats = computed<CyberThreats[]>(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return cyberThreats;

  return cyberThreats.filter((threat) =>
    threat.name?.toLowerCase().includes(query),
  );
});

function showCyberThreatList(): void {
  isOpen.value = true;
}

function closeModal(): void {
  isOpen.value = false;
}

function getThreatBadgeClass(type: string | null) {
  switch (type) {
    case "Malware":
      return "bg-red-100 text-red-700";
    case "Phishing":
      return "bg-yellow-100 text-yellow-700";
    case "Social Engineering":
      return "bg-purple-100 text-purple-700";
    case "Password Attack":
      return "bg-orange-100 text-orange-700";
    case "Network Attack":
      return "bg-blue-100 text-blue-700";
    case "Web Attack":
      return "bg-green-100 text-green-700";
    case "Insider Threat":
      return "bg-gray-100 text-gray-700";
    case "Advanced Persistent Threat":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
}
</script>

<template>
  <section class="my-16 px-6">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Common Cyber Threats</h1>

      <p class="text-gray-600 mt-3">
        Understanding these threats is the first step toward protecting your
        data and systems.
      </p>

      <div class="my-6">
        <input
          type="search"
          v-model="searchQuery"
          placeholder="Search cyber threats..."
          class="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredThreats.length === 0" class="text-center">
      <h1 class="text-2xl font-bold text-gray-800">Cyber Threat not found!</h1>
      <p class="text-gray-600 py-4">
        Click this to see a list of
        <span
          class="font-semibold cursor-pointer"
          v-on:click="showCyberThreatList"
        >
          cyberthreats
        </span>
      </p>
    </div>

    <!-- Grid -->
    <div v-else class="flex flex-wrap justify-center gap-6">
      <div
        v-for="threat in filteredThreats"
        :key="threat.id"
        class="w-[calc((100%-3rem)/4)] bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
      >
        <h2 class="text-xl font-semibold mb-2 text-gray-800">
          {{ threat.name }}
        </h2>

        <p class="text-gray-600">
          {{ threat.description }}
        </p>

        <span
          class="inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full"
          :class="getThreatBadgeClass(threat.type)"
        >
          {{ threat.type }}
        </span>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-16 relative max-h-[80vh] overflow-y-auto"
        >
          <!-- Close button -->
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
          >
            ✕
          </button>

          <!-- Header -->
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            All Cyber Threats
          </h2>

          <!-- List -->
          <div class="space-y-4">
            <div
              v-for="threat in cyberThreats"
              :key="threat.id"
              class="p-4 border rounded-xl hover:bg-gray-50 transition"
            >
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-gray-800">
                  {{ threat.name }}
                </h3>

                <span
                  class="px-3 py-1 text-xs font-semibold rounded-full"
                  :class="getThreatBadgeClass(threat.type)"
                >
                  {{ threat.type }}
                </span>
              </div>

              <p class="text-gray-600 text-sm mt-2">
                {{ threat.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
