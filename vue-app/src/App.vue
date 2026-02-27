<template>
  <div class="min-h-screen pb-24 selection:bg-primary/30">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import BottomNav from "./components/ui/BottomNav.vue";
import { onMounted } from "vue";

onMounted(() => {
  // Init theme from localStorage or system preference
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
