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
import NewsListItem from './NewsListItem.vue'
import { type ArticleDigest } from './ArticleDigest'

defineProps<{
  digests: ArticleDigest[]
}>()
</script>
