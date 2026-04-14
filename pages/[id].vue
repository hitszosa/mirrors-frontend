<template>
  <article class="flex flex-col w-full max-w-screen-lg prose dark:prose-invert prose-slate">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <NotFound v-else />
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('fallback')
    .path(route.path)
    .first()
})
</script>
