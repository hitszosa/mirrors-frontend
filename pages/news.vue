<template>
  <main v-if="!$route.params.title" class="w-1/2 max-w-screen-xl">
    <NewsList />
  </main>
  <main v-else>
    <NuxtPage />
  </main>
</template>
