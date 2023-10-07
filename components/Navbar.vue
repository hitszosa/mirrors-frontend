<template>
  <header
    class="whitespace-nowrap flex items-center space-x-12 px-10 h-16 z-50 w-full shadow-sm backdrop-blur-md backdrop-saturate-200 bg-white/70 dark:bg-gray-900/70"
  >
    <NuxtLink class="justify-start" to="/">
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
    <nav class="justify-end font-medium text-base">
      <ul class="flex flex-row list-none space-x-8">
        <li>
          <NavButton link="/">
            Home
          </NavButton>
        </li>
        <li>
          <NavButton link="https://mirrors-help.osa.moe/" :is-external-link="true">
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
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
    titleName: string
}>()
</script>
