<template>
  <main v-if="!$route.params.title" class="w-1/2 max-w-screen-xl">
    <BaseSectionHeading class="pb-4">
      <template #icon>
        <Icon name="icon-park-outline:newspaper-folding" />
      </template>
      Newsroom
    </BaseSectionHeading>
    <section>
      <NewsList />
    </section>
  </main>
  <main v-else>
    <NuxtPage />
  </main>
</template>
