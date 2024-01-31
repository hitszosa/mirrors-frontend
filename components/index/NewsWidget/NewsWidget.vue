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
    <NuxtLink to="/news">
      <UButton
        color="white"
        variant="solid"
        block
        class="transition-colors h-9 mt-4"
      >
        Read More
      </UButton>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { type ArticleDigest } from '~/components/news/ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryContent('news')
    .only(['title', '_path', 'description', 'date', 'tags'])
    .sort({ date: -1 })
    .find()
)
const digests = (rawData.data.value ?? []) as ArticleDigest[]
</script>
