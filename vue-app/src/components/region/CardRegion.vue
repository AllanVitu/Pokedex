<template>
  <button
    @click="$router.push(`/region/${region.id}`)"
    class="w-full group text-left bg-surface rounded-3xl p-4 border border-border-color shadow-soft dark:shadow-soft-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <div
      class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-page"
    >
      <!-- Skeleton placeholder for loading -->
      <div
        v-if="!imageLoaded"
        class="absolute inset-0 animate-pulse bg-text-muted/10"
      ></div>
      <img
        :src="region.imageUrl"
        :alt="region.name"
        @load="imageLoaded = true"
        loading="lazy"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        :class="{ 'opacity-0': !imageLoaded }"
      />

      <div
        class="absolute top-3 left-3 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-text-primary"
      >
        {{ region.type }}
      </div>
    </div>

    <div>
      <p class="text-xs font-bold text-primary tracking-wider uppercase mb-1">
        {{ region.category }}
      </p>
      <h3 class="text-xl font-bold text-text-primary mb-1">
        {{ region.name }}
      </h3>
      <p class="text-sm text-text-muted line-clamp-2 leading-relaxed">
        {{ region.description }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Region } from "../../types";

defineProps<{ region: Region }>();
const imageLoaded = ref(false);
</script>
