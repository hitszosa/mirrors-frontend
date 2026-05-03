<template>
  <a
    :href="link"
    target="_blank"
    rel="noreferrer"
    class="underline decoration-dotted underline-offset-4"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>
