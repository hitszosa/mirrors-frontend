<template>
  <header
    class="whitespace-nowrap flex items-center px-10 z-50 w-screen shadow-sm
    backdrop-blur-md backdrop-saturate-200 bg-white/70 dark:bg-gray-900/70
    flex-col h-28 justify-evenly md:flex-row md:py-0 md:h-16 md:justify-between md:space-x-12"
  >
    <a
      class="justify-start"
      href="/"
    >
      <div class="flex items-center">
        <div
          class="flex items-center justify-center mr-3 content-stretch
          h-8 w-8 md:h-10 md:w-10"
        >
          <slot name="logo" />
        </div>
        <span class="text-xl font-medium text-slate-800 dark:text-slate-200">
          {{ $props.titleName }}
        </span>
      </div>
    </a>
    <nav class="flex flex-row space-x-7 justify-end font-medium text-base items-center">
      <ul class="flex flex-row list-none space-x-7">
        <li
          v-for="item in navItems"
          :key="item.link"
        >
          <a
            :href="item.link"
            :target="item.isExternalLink ? '_blank' : undefined"
            :rel="item.isExternalLink ? 'noreferrer' : undefined"
            :aria-current="isLinkActive(item.link) ? 'page' : undefined"
            class="transition-colors after:transition-all relative inline-block
            hocus:text-blue-400 dark:hocus:text-blue-300
            after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:rounded-full after:-z-10
            hocus:after:w-full hocus:after:h-2 hocus:after:bg-slate-100"
            :class="getNavLinkClass(isLinkActive(item.link))"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
      <button
        name="Change theme"
        class="transition-colors flex items-center w-4 h-4 text-lg text-slate-500 dark:text-slate-400
        hocus:text-blue-400 dark:hocus:text-blue-300"
        @click="onNextTheme"
      >
        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          leave-active-class="transition-all duration-300 ease-out"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <IconifyIcon
            :key="currentThemeIcon"
            :icon="currentThemeIcon"
            class="absolute"
          />
        </Transition>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  titleName: string
  currentPath?: string | null
}>()

enum ThemeState {
  System = 'system',
  Light = 'light',
  Dark = 'dark',
}

const STORAGE_KEY = 'nuxt-color-mode'
const themes = [ThemeState.System, ThemeState.Light, ThemeState.Dark]
const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Help', link: 'https://mirrors-help.osa.moe/', isExternalLink: true },
  { label: 'News', link: '/news' },
  { label: 'About', link: '/about' },
]
const fallbackCurrentPath = ref<string | null>(null)
const theme = ref<ThemeState>(ThemeState.System)
const normalizedCurrentPath = computed(() => normalizePath(props.currentPath ?? fallbackCurrentPath.value))
const currentThemeIcon = computed(() => {
  switch (theme.value) {
    case ThemeState.Light:
      return 'icon-park-outline:sun-one'
    case ThemeState.Dark:
      return 'icon-park-outline:moon'
    default:
      return 'icon-park-outline:dark-mode'
  }
})

let mediaQuery: MediaQueryList | null = null

const onSystemThemeChange = () => {
  if (theme.value === ThemeState.System) {
    applyTheme(theme.value)
  }
}

const normalizePath = (path: string | null) => {
  if (path === null) {
    return null
  }

  if (!path || path === '/') {
    return '/'
  }

  return path.endsWith('/') ? path.slice(0, -1) : path
}

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return ThemeState.System
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)
  return themes.includes(storedTheme as ThemeState)
    ? storedTheme as ThemeState
    : ThemeState.System
}

const applyTheme = (value: ThemeState) => {
  if (typeof window === 'undefined') {
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = value === ThemeState.Dark || (value === ThemeState.System && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
}

const isLinkActive = (link: string) => {
  const currentPath = normalizedCurrentPath.value
  const normalizedLink = normalizePath(link)

  if (currentPath === null || normalizedLink === null) {
    return false
  }

  if (normalizedLink === '/news') {
    return currentPath === normalizedLink || currentPath.startsWith(`${normalizedLink}/`)
  }

  return currentPath === normalizedLink
}

const getNavLinkClass = (isActive: boolean) => {
  return isActive
    ? 'text-blue-400 dark:text-blue-300 after:w-full after:h-2 after:bg-blue-400/20 dark:after:bg-blue-300/20'
    : 'text-slate-500 dark:text-slate-400 after:bg-blue-400/20 dark:after:bg-blue-300/20 after:w-0 after:h-0'
}

watch(theme, () => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, theme.value)
  applyTheme(theme.value)
})

const onNextTheme = () => {
  const themeIndex = themes.indexOf(theme.value)
  theme.value = themes[(themeIndex + 1) % themes.length]
}

onMounted(() => {
  if (props.currentPath == null) {
    fallbackCurrentPath.value = window.location.pathname
  }

  theme.value = getStoredTheme()
  applyTheme(theme.value)

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', onSystemThemeChange)
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', onSystemThemeChange)
})
</script>
