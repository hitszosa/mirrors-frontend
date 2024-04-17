<template>
  <div
    class="flex w-full max-w-screen-xl
    flex-col space-y-12 md:flex-row md:space-x-12 md:space-y-0 md:items-start"
  >
    <div class="flex flex-col space-y-4 grow">
      <IndexMirrorList />
    </div>
    <div
      class="flex flex-col p-7 space-y-10 min-w-[20em] h-min bg-slate-50 dark:bg-gray-800 rounded-xl
      md:w-[32vw] md:max-w-[30em]"
    >
      <IndexDownloadWidget />
      <IndexNewsWidget />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
