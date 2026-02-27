<template>
  <main class="px-4 pt-12 max-w-2xl mx-auto">
    <!-- Contextual Header -->
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-text-primary mb-2">
        Explore
      </h1>
      <p class="text-text-muted text-lg">Discover the regional entities.</p>
    </header>

    <!-- Search & Filters -->
    <div
      class="sticky top-0 z-40 bg-page/80 backdrop-blur-xl py-4 -mx-4 px-4 mb-4"
    >
      <SearchBar v-model="searchQuery" placeholder="Search a region..." />

      <!-- Filter Chips -->
      <div class="flex gap-2 overflow-x-auto mt-4 pb-2 scrollbar-hide">
        <button
          v-for="cat in ['All', 'Nature', 'Fire', 'Heritage', 'Urban']"
          :key="cat"
          @click="activeFilter = cat"
          class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border"
          :class="
            activeFilter === cat
              ? 'bg-text-primary text-page border-text-primary'
              : 'bg-surface border-border-color text-text-muted hover:text-text-primary'
          "
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Listing -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <CardRegion
        v-for="region in filteredRegions"
        :key="region.id"
        :region="region"
      />
    </div>

    <!-- Empty state -->
    <div v-if="filteredRegions.length === 0" class="text-center py-12">
      <p class="text-text-muted">No regions found matching your criteria.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { mockRegions } from "../data/mock";
import SearchBar from "../components/ui/SearchBar.vue";
import CardRegion from "../components/region/CardRegion.vue";

const searchQuery = ref("");
const activeFilter = ref("All");

const filteredRegions = computed(() => {
  return mockRegions.filter((r) => {
    const matchSearch = r.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchType =
      activeFilter.value === "All" || r.type === activeFilter.value;
    return matchSearch && matchType;
  });
});
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
