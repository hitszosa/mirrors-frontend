<template>
    <li v-for="article in $props.list" :key="article._path" class="mb-2 flex justify-between items-center">
        <div class="min-w-0 flex items-center">
            <div class="pr-4 inline-block flex items-center justify-center">
                <Icon name="icon-park-outline:align-text-left" />
            </div>
            <a
                class="truncate transition relative inline-block z-10 hocus:underline hocus:underline-offset-4 hover:cursor-pointer">
                {{ article.title }}
            </a>
        </div>
        <div class="shrink-0">
            <span class="inline-block">
                {{ dayjs.unix(article.update).fromNow() }}
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
defineProps<{
    list: {
        title: string
        update: number
        _path: string
    }[]
}>()
</script>
