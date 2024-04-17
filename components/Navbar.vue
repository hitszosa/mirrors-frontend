<template>
  <header
    class="whitespace-nowrap flex items-center px-10 z-50 w-screen shadow-sm
    backdrop-blur-md backdrop-saturate-200 bg-white/70 dark:bg-gray-900/70 overflow-x-scroll
    flex-col h-28 justify-evenly md:flex-row md:py-0 md:h-16 md:justify-between md:space-x-12"
  >
    <NuxtLink
      class="justify-start"
      to="/"
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
    </NuxtLink>
    <nav class="flex flex-row space-x-7 justify-end font-medium text-base items-center">
      <ul class="flex flex-row list-none space-x-7">
        <li>
          <NavButton link="/">
            Home
          </NavButton>
        </li>
        <li>
          <NavButton
            link="https://mirrors-help.osa.moe/"
            :is-external-link="true"
          >
            Help
          </NavButton>
        </li>
        <li>
          <NavButton link="/news">
            News
          </NavButton>
        </li>
        <li>
          <NavButton link="/about">
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
defineProps<{
  titleName: string
}>()

enum ThemeState {
  System = 'system',
  Light = 'light',
  Dark = 'dark',
}

const colorMode = useColorMode()
const themes = [ThemeState.System, ThemeState.Light, ThemeState.Dark]
const themeIndex = ref(themes.indexOf(colorMode.preference as ThemeState))
const theme = computed(() => themes[themeIndex.value])

watch(theme, () => {
  colorMode.preference = theme.value
})

const onNextTheme = () => {
  themeIndex.value = (themeIndex.value + 1) % themes.length
}
</script>
