<template>
  <nav
    class="fixed bottom-0 inset-x-0 z-50 p-4 safe-area-pb pointer-events-none"
  >
    <div
      class="glass-panel mx-auto max-w-sm rounded-full flex justify-around items-center p-2 shadow-soft dark:shadow-soft-dark pointer-events-auto"
    >
      <router-link to="/" class="nav-item" active-class="text-primary">
        <HomeIcon class="w-6 h-6" stroke-width="2" />
      </router-link>

      <router-link to="/explore" class="nav-item" active-class="text-primary">
        <SearchIcon class="w-6 h-6" stroke-width="2" />
      </router-link>

      <router-link to="/settings" class="nav-item" active-class="text-primary">
        <SettingsIcon class="w-6 h-6" stroke-width="2" />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, SearchIcon, SettingsIcon } from "lucide-vue-next";
</script>

<style scoped>
.nav-item {
  @apply p-3 text-text-muted hover:text-text-primary transition-colors rounded-full active:scale-95 touch-manipulation;
}
.safe-area-pb {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
</style>
