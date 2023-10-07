<template>
  <NuxtLink
    :to="$props.link"
    target="_blank"
    class="underline decoration-dotted underline-offset-4"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>
