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
        <li>
          <NavButton
            link="/"
            :active="isLinkActive('/')"
          >
            Home
          </NavButton>
        </li>
        <li>
          <NavButton
            link="https://mirrors-help.osa.moe/"
            :is-external-link="true"
            :active="false"
          >
            Help
          </NavButton>
        </li>
        <li>
          <NavButton
            link="/news"
            :active="isLinkActive('/news')"
          >
            News
          </NavButton>
        </li>
        <li>
          <NavButton
            link="/about"
            :active="isLinkActive('/about')"
          >
            About
          </NavButton>
        </li>
      </ul>
      <button
        name="Change theme"
        class="transition-colors flex items-center w-4 h-4 text-lg text-slate-500 dark:text-slate-400
        hocus:text-blue-400 dark:hocus:text-blue-300"
        @click="onNextTheme"
      >
        <BaseSlidingTransition>
          <Icon
            v-if="theme === ThemeState.System"
            class="absolute"
            name="icon-park-outline:dark-mode"
          />
          <Icon
            v-else-if="theme === ThemeState.Light"
            class="absolute"
            name="icon-park-outline:sun-one"
          />
          <Icon
            v-else-if="theme === ThemeState.Dark"
            class="absolute"
            name="icon-park-outline:moon"
          />
        </BaseSlidingTransition>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BaseSlidingTransition from '~/components/base/SlidingTransition.vue'
import Icon from '~/components/Icon.vue'
import NavButton from '~/components/NavButton.vue'

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
const fallbackCurrentPath = ref<string | null>(null)
const theme = ref<ThemeState>(ThemeState.System)
const normalizedCurrentPath = computed(() => normalizePath(props.currentPath ?? fallbackCurrentPath.value))

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
