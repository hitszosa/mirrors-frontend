<template>
    <header
        class="flex flex-row items-center px-10 h-16 w-full drop-shadow-sm backdrop-blur-md backdrop-saturate-150 bg-white/80 dark:bg-black/80">
        <div class="grow justify-start translate-y-0.5">
            <NuxtLink to="/">
                <span class="inline-block -translate-y-0.5">
                    <slot name="logo">
                    </slot>
                </span>
                <span class="px-1.5"></span>
                <span class="text-xl font-medium">{{ $props.titleName }}</span>
            </NuxtLink>
        </div>
        <nav class="justify-end font-medium">
            <ul class="flex flex-row list-none space-x-8">
                <li>
                    <NavButton link="/">Home</NavButton>
                </li>
                <li>
                    <NavButton link="/docs">Docs</NavButton>
                </li>
                <li>
                    <NavButton link="/news">News</NavButton>
                </li>
                <li>
                    <NavButton link="/about">About</NavButton>
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