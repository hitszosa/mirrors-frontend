<template>
  <ContentList v-slot="{ list }" :path="`/news`">
    <div class="relative before:content-[''] before:absolute before:bg-slate-600 before:h-full before:z-1 before:w-[2px] before:-left-16">
      <NewsListItem v-for="article in list" :key="article._path" :data="article" />
    </div>
  </ContentList>
</template>
