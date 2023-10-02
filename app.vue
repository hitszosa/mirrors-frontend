<template>
  <div class="dark:bg-gray-900">
    <NuxtLayout class="bg-inherit">
      <NuxtPage class="bg-inherit" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style lang="scss">
body {
  @apply dark:bg-gray-900;
}
</style>
