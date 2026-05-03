<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize"
    :class="badgeClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: 'green' | 'blue' | 'red' | 'gray'
}>(), {
  color: 'gray',
})

const badgeClass = computed(() => {
  switch (props.color) {
    case 'green':
      return 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300'
    case 'blue':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
    case 'red':
      return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
  }
})
</script>
