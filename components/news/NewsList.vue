<template>
  <ul class="container-xl w-3/4 mx-auto flex flex-wrap gap-x-8 gap-y-4">
    <li
      v-for="digest in digests"
      :key="digest._path"
    >
      <NewsListItem
        :digest="digest"
      />
    </li>
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
