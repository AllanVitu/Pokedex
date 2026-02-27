<template>
  <div class="relative w-full group">
    <div
      class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
    >
      <SearchIcon
        class="h-5 w-5 text-text-muted transition-colors group-focus-within:text-primary"
        stroke-width="2"
      />
    </div>
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="w-full bg-surface border border-border-color rounded-full py-4 pl-12 pr-4 text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
    />
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";

defineProps<{ modelValue: string; placeholder?: string }>();
defineEmits(["update:modelValue"]);
</script>
