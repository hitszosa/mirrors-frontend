<template>
  <div class="dark:bg-gray-900">
    <NuxtLayout class="bg-inherit">
      <NuxtPage class="bg-inherit" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useRoute()
useHead({
  title: 'HITSZ OSA Mirrors',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})
</script>

<style lang="scss">
body {
  @apply dark:bg-gray-900;
}
</style>
