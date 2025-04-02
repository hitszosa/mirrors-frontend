<template>
  <ul
    class="flex flex-wrap
    gap-y-2 md:justify-start md:gap-x-8 md:gap-y-4"
  >
    <NewsListItem
      v-for="digest in digests"
      :key="digest._path"
      :digest="digest"
    />
  </ul>
</template>

<script setup lang="ts">
import type { ArticleDigest } from './ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryCollection('news')
    .select('title', 'path', 'description', 'date', 'tags')
    .order('date', 'DESC')
    .all(),
)
const digests = computed(() => {
  const data = rawData.data?.value
  if (!data) {
    return []
  }
  return data
})
</script>
