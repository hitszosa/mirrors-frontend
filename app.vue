<template>
  <div class="dark:bg-gray-900 min-h-max min-w-max">
    <NuxtLayout class="bg-inherit">
      <NuxtPage class="bg-inherit" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
