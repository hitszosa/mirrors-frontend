<template>
  <section class="space-y-4">
    <BaseSectionHeading>
      <template #icon>
        <Icon name="icon-park-outline:newspaper-folding" />
      </template>
      Recent News
    </BaseSectionHeading>
    <ul class="space-y-2 list-none list-inside">
      <IndexNewsWidgetItem
        v-for="digest in digests"
        :key="digest._path"
        :digest="digest"
      />
    </ul>
    <a
      href="/news"
      class="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-base font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 hocus:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-700 dark:hocus:bg-slate-800"
    >
      Read More
    </a>
  </section>
</template>

<script setup lang="ts">
import BaseSectionHeading from '~/components/base/SectionHeading.vue'
import Icon from '~/components/Icon.vue'
import { type ArticleDigest } from '~/components/news/ArticleDigest'
import IndexNewsWidgetItem from './NewsWidgetItem.vue'

defineProps<{
  digests: ArticleDigest[]
}>()
</script>
