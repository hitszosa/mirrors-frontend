<template>
    <li
        v-for="article in $props.list"
        :key="article._path"
        class="mb-2 flex justify-between"
    >
        <div>
            <span class="pr-4 inline-block">
                <Icon name="icon-park-outline:align-text-left" />
            </span>
            <a
                class="translate-y-0.5 transition delay-50 after:transition-all relative inline-block z-10 after:block after:absolute after:rounded-md after:bg-blue-200 after:w-0 after:h-0 after:-right-0 after:bottom-1 after:-z-10 hocus:after:w-full hocus:after:h-1 hocus:after:right-0 hover:cursor-pointer"
            >
                {{ article.title }}
            </a>
        </div>
        <div>
            <span class="inline-block translate-y-0.5 truncate">
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
