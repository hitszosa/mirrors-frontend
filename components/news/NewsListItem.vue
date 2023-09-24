<template>
  <div class="flex justify-center">
    <div class="w-[48px] h-[48px] z-2 bg-slate-200 absolute -left-16 rounded-full -translate-x-1/2 flex justify-center items-center flex-nowrap">
      <!-- <div class="flex justify-center content-center w-full h-full"> -->
      <Icon name="icon-park-outline:quote" />
      <!-- </div> -->
    </div>
    <article class="flex flex-col p-7 w-full h-min bg-slate-50 dark:bg-gray-800 rounded-xl">
      <div>Title: {{ data.title }}</div>
      <div>Description: {{ data.description }}</div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  data:ParsedContent
}>()

</script>
