<template>
  <NuxtLink
    :to="$props.link"
    :custom="true"
  >
    <template #default="{ isActive }">
      <a
        :href="$props.link"
        :class="`transition after:transition-all relative inline-block
        hocus:text-blue-400 dark:hocus:text-blue-300
        ${isActive ? 'text-blue-400 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400'}
        after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:rounded-full after:-z-10
        hocus:after:w-full hocus:after:h-2 hocus:after:bg-slate-100
        ${isActive ? 'after:w-full after:h-2 after:bg-slate-100' : 'after:bg-blue-400/20 dark:after:bg-blue-300/20 after:w-0 after:h-0'}`"
      >
        <slot />
      </a>
    </template>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>
