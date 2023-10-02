<template>
  <section class="space-y-4">
    <BaseSectionHeading>
      <template #icon>
        <Icon name="icon-park-outline:newspaper-folding" />
      </template>
      Recent News
    </BaseSectionHeading>
    <ul
      v-for="digest in digests"
      :key="digest._path"
      class="list-none list-inside px-2"
    >
      <IndexNewsWidgetItem :digest="digest" />
    </ul>
    <NuxtLink to="/news">
      <UButton
        color="white"
        variant="solid"
        block
        class="transition"
      >
        Read More
      </UButton>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { ArticleDigest } from '~/components/news/ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryContent('news')
    .only(['title', '_path', 'description', 'date', 'tags'])
    .find()
)
const digests = (rawData.data.value ?? []) as ArticleDigest[]
</script>
