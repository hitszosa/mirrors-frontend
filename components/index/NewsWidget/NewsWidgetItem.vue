<template>
  <li class="mb-2 flex justify-between items-center">
    <div class="min-w-0 flex items-center">
      <div class="pr-4 flex items-center justify-center">
        <Icon name="icon-park-outline:align-text-left" />
      </div>
      <NuxtLink
        :to="digest._path"
        class="truncate transition relative inline-block z-10 hocus:underline hocus:underline-offset-4 hover:cursor-pointer"
      >
        {{ digest.title }}
      </NuxtLink>
    </div>
    <div class="shrink-0">
      <span class="inline-block">
        {{ dayjs.utc(digest.date).fromNow() }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ArticleDigest } from '~/components/news/ArticleDigest'
defineProps<{
    digest: ArticleDigest
}>()
</script>
