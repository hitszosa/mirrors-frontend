<template>
    <NuxtLink :to="$props.link" hover:text-blue dark:hover:text-blue>
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    link: string
}>()
</script>