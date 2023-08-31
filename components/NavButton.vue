<template>
    <NuxtLink :to="$props.link" class="transition delay-50 after:transition-all after:delay-50 relative inline-block
    text-slate-500 hocus:text-blue-400 dark:hocus:text-blue-300
    after:block after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:rounded-full after:-z-10
    after:bg-transparent after:w-0 after:h-0
    hocus:after:w-full hocus:after:h-2 hocus:after:bg-slate-100">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>