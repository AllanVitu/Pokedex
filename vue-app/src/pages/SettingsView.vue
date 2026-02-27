<template>
  <main class="px-4 pt-12 max-w-2xl mx-auto">
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold text-text-primary mb-2 tracking-tight">
        Settings
      </h1>
    </header>

    <div
      class="bg-surface border border-border-color rounded-3xl overflow-hidden divide-y divide-border-color shadow-soft dark:shadow-soft-dark"
    >
      <div class="p-4 flex justify-between items-center bg-surface">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-page rounded-full text-text-primary">
            <MoonIcon v-if="isDark" class="w-5 h-5" />
            <SunIcon v-else class="w-5 h-5" />
          </div>
          <span class="font-medium text-text-primary text-lg">Dark Mode</span>
        </div>
        <button
          @click="toggleTheme"
          class="w-14 h-8 rounded-full transition-colors relative"
          :class="isDark ? 'bg-primary' : 'bg-text-muted/30'"
        >
          <div
            class="absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform shadow-md"
            :class="isDark ? 'translate-x-6' : ''"
          ></div>
        </button>
      </div>

      <div class="p-4 flex justify-between items-center bg-surface">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-page rounded-full text-text-primary">
            <InfoIcon class="w-5 h-5" />
          </div>
          <span class="font-medium text-text-primary text-lg"
            >About RegionDex</span
          >
        </div>
        <span class="text-text-muted text-sm font-medium pr-2">v3.0.0</span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MoonIcon, SunIcon, InfoIcon } from "lucide-vue-next";

const isDark = ref(document.documentElement.classList.contains("dark"));

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  isDark.value = document.documentElement.classList.contains("dark");
  localStorage.theme = isDark.value ? "dark" : "light";
}
</script>
