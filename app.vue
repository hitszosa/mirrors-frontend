<template>
  <div class="dark:bg-gray-900">
    <NuxtLayout class="bg-inherit">
      <NuxtPage class="bg-inherit" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const themeInitScript = `(function(){const key='nuxt-color-mode';const stored=localStorage.getItem(key);const theme=stored==='light'||stored==='dark'||stored==='system'?stored:'system';const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark=theme==='dark'||(theme==='system'&&prefersDark);document.documentElement.classList.toggle('dark',isDark);document.documentElement.style.colorScheme=isDark?'dark':'light'})()`

useRoute()
useHead({
  title: 'HITSZ OSA Mirrors',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  script: [
    {
      key: 'theme-init',
      tagPosition: 'head',
      children: themeInitScript,
    },
  ],
})
</script>

<style lang="scss">
body {
  @apply dark:bg-gray-900;
}
</style>
