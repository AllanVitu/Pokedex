<template>
  <div class="min-h-screen bg-page" v-if="region">
    <!-- Hero Image Contextuel avec bouton retour Glass -->
    <div class="relative w-full h-[50vh] bg-surface">
      <img :src="region.imageUrl" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-page to-transparent"
      ></div>

      <button
        @click="$router.back()"
        class="absolute top-12 left-4 glass-panel p-3 rounded-full text-text-primary z-10 active:scale-90 transition-transform"
      >
        <ArrowLeftIcon class="w-6 h-6" stroke-width="2" />
      </button>
    </div>

    <!-- Contenu qui remonte sur l'image -->
    <main class="relative z-10 -mt-10 px-4 max-w-2xl mx-auto pb-24">
      <div
        class="bg-surface rounded-t-[32px] p-6 shadow-soft-dark border border-border-color min-h-[50vh]"
      >
        <div class="w-12 h-1.5 bg-border-color rounded-full mx-auto mb-6"></div>
        <!-- Pull Handle Indicator -->

        <span
          class="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider rounded-full mb-4"
        >
          {{ region.type }}
        </span>

        <h1
          class="text-4xl font-extrabold text-text-primary mb-2 tracking-tight"
        >
          {{ region.name }}
        </h1>
        <p class="text-lg text-text-muted mb-8 leading-relaxed">
          {{ region.description }}
        </p>

        <!-- Stats Section (Apple Standard) -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="bg-page rounded-2xl p-4">
            <span
              class="text-xs text-text-muted font-semibold uppercase tracking-widest"
              >Category</span
            >
            <p class="text-lg font-bold text-text-primary mt-1">
              {{ region.category }}
            </p>
          </div>
          <div class="bg-page rounded-2xl p-4">
            <span
              class="text-xs text-text-muted font-semibold uppercase tracking-widest"
              >Rarity</span
            >
            <p class="text-lg font-bold text-text-primary mt-1">
              {{ region.rarity || "Common" }}
            </p>
          </div>
          <div class="bg-page rounded-2xl p-4" v-if="region.weight">
            <span
              class="text-xs text-text-muted font-semibold uppercase tracking-widest"
              >Weight</span
            >
            <p class="text-lg font-bold text-text-primary mt-1">
              {{ region.weight }}
            </p>
          </div>
          <div class="bg-page rounded-2xl p-4" v-if="region.height">
            <span
              class="text-xs text-text-muted font-semibold uppercase tracking-widest"
              >Height</span
            >
            <p class="text-lg font-bold text-text-primary mt-1">
              {{ region.height }}
            </p>
          </div>
        </div>

        <!-- Talents -->
        <div v-if="region.talents && region.talents.length > 0">
          <h3 class="text-xl font-bold text-text-primary mb-4">Talents</h3>
          <ul class="space-y-3">
            <li
              v-for="talent in region.talents"
              :key="talent"
              class="flex items-center text-text-muted font-medium"
            >
              <span class="w-2 h-2 rounded bg-primary mr-3"></span>
              {{ talent }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-text-muted">Loading region...</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { mockRegions } from "../data/mock";
import { ArrowLeftIcon } from "lucide-vue-next";

const route = useRoute();
const region = computed(() =>
  mockRegions.find((r) => r.id === route.params.id),
);
</script>
