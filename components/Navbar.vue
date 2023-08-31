<template>
    <header flex flex-row items-center p-10 w-full rounded-lg drop-shadow-lg bg-white dark:bg-black transition-colors>
        <div grow justify-start>
            <slot name="logo"></slot>
            <span>{{ $props.titleName }}</span>
        </div>
        <nav justify-end>
            <NavButton link="/">Mirrors</NavButton>
        </nav>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    titleName: string
}>()
</script>