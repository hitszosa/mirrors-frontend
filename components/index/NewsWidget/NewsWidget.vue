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
        :key="digest.path"
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
import type { ArticleDigest } from '~/components/news/ArticleDigest'

const rawData = await useAsyncData(
  'news',
  () => queryCollection('news')
    .select('title', 'path', 'description', 'date', 'tags')
    .order('date', 'DESC')
    .all(),
)
const digests = computed(() => {
  const data = rawData.data?.value
  if (!data) {
    return []
  }
  return data
})
</script>
