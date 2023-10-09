<template>
  <div class="flex space-x-12 w-full max-w-screen-xl">
    <div class="flex flex-col space-y-4 grow">
      <IndexMirrorList />
    </div>
    <div
      class="flex flex-col p-7 space-y-10 min-w-[20em] w-[30vw] h-min bg-slate-50 dark:bg-gray-800 rounded-xl"
    >
      <IndexDownloadWidget />
      <IndexNewsWidget />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
