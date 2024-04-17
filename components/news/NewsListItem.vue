<template>
  <li
    class="flex justify-center
    w-full
    md:w-[20em]"
  >
    <article
      class="flex flex-col space-y-2 p-4 w-full border-t-[0.1em] border-slate-300 dark:border-slate-600"
    >
      <NuxtLink
        :to="digest._path"
        class="transition-colors max-w-min hocus:text-blue-400 dark:hocus:text-blue-300"
      >
        <h2
          class="text-xl font-medium truncate"
        >
          {{ digest.title }}
        </h2>
      </NuxtLink>
      <p>{{ digest.description }}</p>
      <div class="flex justify-between pt-1 text-slate-400 text-sm">
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
  </li>
</template>

<script setup lang="ts">
import { type ArticleDigest } from './ArticleDigest'

const props = defineProps<{
  digest: ArticleDigest
}>()
const date = new Date(props.digest.date)
const dateString = `${date.getFullYear()} 年 ${date.getMonth()} 月 ${date.getDay()} 日`
</script>
