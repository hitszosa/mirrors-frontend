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
import { type ArticleDigest } from './ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryContent('news')
    .only(['title', '_path', 'description', 'date', 'tags'])
    .sort({ date: -1 })
    .find(),
)
const digests = (rawData.data.value ?? []) as ArticleDigest[]
</script>
