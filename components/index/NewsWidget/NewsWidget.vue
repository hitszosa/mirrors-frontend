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
    <a href="/news">
      <AppButton
        color="white"
        variant="solid"
        block
        class="transition-colors h-9 mt-4"
      >
        Read More
      </AppButton>
    </a>
  </section>
</template>

<script setup lang="ts">
import BaseSectionHeading from '~/components/base/SectionHeading.vue'
import Icon from '~/components/Icon.vue'
import { type ArticleDigest } from '~/components/news/ArticleDigest'
import AppButton from '~/components/ui/AppButton.vue'
import IndexNewsWidgetItem from './NewsWidgetItem.vue'

defineProps<{
  digests: ArticleDigest[]
}>()
</script>
