<template>
  <li class="flex justify-between items-center">
    <div class="min-w-0 flex items-center">
      <div class="pr-2 flex items-center justify-center">
        <Icon name="icon-park-outline:align-text-left" />
      </div>
      <NuxtLink
        :to="digest.path"
        class="truncate transition-colors relative inline-block z-10 decoration-dotted underline-offset-4 hocus:underline hover:cursor-pointer"
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
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import type { ArticleDigest } from '~/components/news/ArticleDigest'

dayjs.extend(relativeTime)
dayjs.extend(utc)
defineProps<{
  digest: ArticleDigest
}>()
</script>
