<template>
  <header
    class="flex flex-row items-center px-10 h-16 z-50 w-full drop-shadow-sm backdrop-blur-md backdrop-saturate-200 bg-white/70 dark:bg-gray-900/70"
  >
    <div class="grow justify-start">
      <NuxtLink to="/">
        <div class="flex items-center">
          <div class="flex flex-row items-center justify-center">
            <slot name="logo" />
          </div>
          <span class="px-1.5" />
          <span class="text-xl font-medium text-slate-800 dark:text-slate-200">{{ $props.titleName }}</span>
        </div>
      </NuxtLink>
    </div>
    <nav class="justify-end font-medium text-base">
      <ul class="flex flex-row list-none space-x-8">
        <li>
          <NavButton link="/">
            Home
          </NavButton>
        </li>
        <li>
          <NavButton link="/">
            Docs
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
