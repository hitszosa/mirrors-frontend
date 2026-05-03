<template>
  <div
    v-bind="$attrs"
    class="animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700"
  />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>
