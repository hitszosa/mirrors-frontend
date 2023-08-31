<template>
    <header class="flex flex-row items-center px-8 py-3 w-full drop-shadow-sm bg-white dark:bg-black">
        <div class="grow justify-start">
            <span class="inline-block -translate-y-0.5">
                <slot name="logo">
                </slot>
            </span>
            <span class="px-1.5"></span>
            <span class="text-xl font-medium">{{ $props.titleName }}</span>
        </div>
        <nav class="justify-end">
            <NavButton link="/">Mirrors</NavButton>
        </nav>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    titleName: string
}>()
</script>