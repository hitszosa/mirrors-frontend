<template>
  <div class="flex justify-center relative">
    <div
      class="border-[0.1em] text-slate-400 border-slate-400 dark:text-slate-600 dark:border-slate-600 rounded-full
      flex flex-row items-center justify-center absolute
      -left-10 -top-5 z-10 w-10 h-10 text-lg"
    >
      <Icon name="icon-park-outline:newspaper-folding" />
    </div>
    <article
      class="flex flex-col space-y-2 p-4 w-full border-t-[0.1em] border-slate-400 dark:border-slate-600"
    >
      <NuxtLink :to="digest._path" class="hocus:underline hocus:underline-offset-4 hocus:text-blue-400 dark:hocus:text-blue-300">
        <h2
          class="text-xl font-medium"
        >
          {{ digest.title }}
        </h2>
      </NuxtLink>
      <p>{{ digest.description }}</p>
      <div class="h-1" />
      <div class="flex justify-between text-slate-400 text-sm">
        <div>
          {{ dateString }}
        </div>
        <div>
          <ul
            class="flex space-x-4"
          >
            <li
              v-for="tag in $props.digest.tags"
              :key="tag"
              class="flex shrink items-center space-x-1"
            >
              <Icon name="icon-park-outline:tag-one" /><span>{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ArticleDigest } from './ArticleDigest'

const props = defineProps<{
  digest: ArticleDigest
}>()
const date = new Date(props.digest.date)
const dateString = `${date.getFullYear()} 年 ${date.getMonth()} 月 ${date.getDay()} 日`
</script>
