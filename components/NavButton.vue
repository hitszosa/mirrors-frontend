<template>
  <NuxtLink
    :to="$props.link"
    :custom="true"
  >
    <template #default="{ isActive }">
      <a
        :href="$props.link"
        :target="target"
        class="transition-colors after:transition-all relative inline-block
        hocus:text-blue-400 dark:hocus:text-blue-300
        after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:rounded-full after:-z-10
        hocus:after:w-full hocus:after:h-2 hocus:after:bg-slate-100"
        :class="getButtonStyle(isActive)"
      >
        <slot />
      </a>
    </template>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    link: string
    isExternalLink?: boolean
}>()

const getButtonStyle = (isActive: boolean) => {
  return isActive
    ? 'text-blue-400 dark:text-blue-300 after:w-full after:h-2 after:bg-blue-400/20 dark:after:bg-blue-300/20'
    : 'text-slate-500 dark:text-slate-400 after:bg-blue-400/20 dark:after:bg-blue-300/20 after:w-0 after:h-0'
}

const target = computed(() => {
  return props.isExternalLink ? '_blank' : '_self'
})
</script>
