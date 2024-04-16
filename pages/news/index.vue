<template>
  <div class="flex flex-col w-full min-w-0 max-w-screen-lg">
    <BaseSectionHeading class="pb-8">
      <template #icon>
        <Icon name="icon-park-outline:newspaper-folding" />
      </template>
      News
    </BaseSectionHeading>
    <NewsList />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'News',
})
</script>
