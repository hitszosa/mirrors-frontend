<template>
  <ul
    class="justify-start flex flex-wrap gap-x-8 gap-y-6"
  >
    <NewsListItem
      v-for="digest in digests"
      :key="digest._path"
      :digest="digest"
      class="grow-0"
    />
  </ul>
</template>

<script setup lang="ts">
import { ArticleDigest } from './ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryContent('news')
    .only(['title', '_path', 'description', 'date', 'tags'])
    .find()
)
const digests = (rawData.data.value ?? []) as ArticleDigest[]
</script>
