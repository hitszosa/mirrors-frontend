<template>
  <section class="space-y-4">
    <BaseSectionHeading>
      <template #icon>
        <Icon name="icon-park-outline:newspaper-folding" />
      </template>
      Recent News
    </BaseSectionHeading>
    <ContentList
      v-slot="{ list }"
      path="/news"
    >
      <div>
        <ul class="list-none list-inside px-2">
          <IndexNewsWidgetItem :list="list" />
        </ul>
      </div>
    </ContentList>
    <UButton
      color="white"
      variant="solid"
      block
      class="transition "
    >
      Read More
    </UButton>
  </section>
</template>
