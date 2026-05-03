<template>
  <component
    :is="linkComponent"
    v-bind="linkProps"
    :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noreferrer' : undefined"
    :aria-current="active ? 'page' : undefined"
    class="transition-colors after:transition-all relative inline-block
    hocus:text-blue-400 dark:hocus:text-blue-300
    after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:rounded-full after:-z-10
    hocus:after:w-full hocus:after:h-2 hocus:after:bg-slate-100"
    :class="getButtonStyle(active ?? false)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'

const props = defineProps<{
  active?: boolean
  link: string
  isExternalLink?: boolean
}>()

const appContext = getCurrentInstance()?.appContext

const linkComponent = computed(() => {
  if (props.isExternalLink) {
    return 'a'
  }

  if (appContext?.components.RouterLink) {
    return 'RouterLink'
  }

  if (appContext?.components.NuxtLink) {
    return 'NuxtLink'
  }

  return 'a'
})

const linkProps = computed(() => {
  return linkComponent.value === 'a'
    ? { href: props.link }
    : { to: props.link }
})

const getButtonStyle = (isActive: boolean) => {
  return isActive
    ? 'text-blue-400 dark:text-blue-300 after:w-full after:h-2 after:bg-blue-400/20 dark:after:bg-blue-300/20'
    : 'text-slate-500 dark:text-slate-400 after:bg-blue-400/20 dark:after:bg-blue-300/20 after:w-0 after:h-0'
}
</script>
