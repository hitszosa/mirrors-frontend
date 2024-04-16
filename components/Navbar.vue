<template>
  <header
    class="whitespace-nowrap flex items-center space-x-12 px-10 h-16 z-50 w-full shadow-sm backdrop-blur-md backdrop-saturate-200 bg-white/70 dark:bg-gray-900/70"
  >
    <NuxtLink
      class="justify-start"
      to="/"
    >
      <div class="flex items-center">
        <div class="flex items-center justify-center mr-3 content-stretch h-10 w-10">
          <slot name="logo" />
        </div>
        <span class="text-xl font-medium text-slate-800 dark:text-slate-200">
          {{ $props.titleName }}
        </span>
      </div>
    </NuxtLink>
    <div class="grow" />
    <nav class=" flex flex-row space-x-7 justify-end font-medium text-base items-center">
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
        class="relative -translate-y-2 w-4 text-lg text-slate-500 dark:text-slate-400 animate-dripple"
        @click="onNextTheme"
      >
        <BaseSlidingTransition>
          <Icon
            v-show="theme === ThemeState.System"
            name="icon-park-outline:dark-mode"
          />
        </BaseSlidingTransition>
        <BaseSlidingTransition>
          <Icon
            v-show="theme === ThemeState.Light"
            name="icon-park-outline:sun-one"
          />
        </BaseSlidingTransition>
        <BaseSlidingTransition>
          <Icon
            v-show="theme === ThemeState.Dark"
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
const themeIndex = ref(0)
const theme = computed(() => themes[themeIndex.value])

watch(theme, () => {
  colorMode.preference = theme.value
})

const onNextTheme = () => {
  themeIndex.value = (themeIndex.value + 1) % themes.length
}
</script>
