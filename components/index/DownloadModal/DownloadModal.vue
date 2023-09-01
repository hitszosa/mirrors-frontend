<template>
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" text-slate-800>
        <template #header>
            <div class="flex flex-row justify-between">
                <BaseSectionHeading compact>
                    <template #icon>
                        <Icon name="icon-park-outline:record-disc"></Icon>
                    </template>
                    下载 LiveCD 和软件
                </BaseSectionHeading>
                <UButton :ui="{ rounded: 'rounded-full' }" color="white" variant="ghost" size="sm" @click="$emit('close')">
                    <Icon name="icon-park-outline:close" />
                </UButton>
            </div>
        </template>
        <div class="flex flex-row space-x-6">
            <BaseRadioSelection :items="collections" :index="collectionIndex" @update:index="onCollectionUpdate" />
            <ul class="grow list-disc p-1 pl-4 text-lg space-y-1">
                <li v-for="resource in currentCollection" :key="resource.name">
                    <a :href="resource.link" target="_blank" class="text-blue-500">
                        {{ resource.name }}
                    </a>
                </li>
            </ul>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { useDownloadStore } from './DownloadStore'
import { storeToRefs } from 'pinia'

const store = useDownloadStore()
const { resourceCollection } = storeToRefs(store)

defineEmits<{
    close: []
}>()

const collectionIndex = ref(0)
const currentCollection = ref(Object.values(resourceCollection.value)[0])

const collections = computed(() => Object.keys(resourceCollection.value))

const onCollectionUpdate = (collection: string, index: number) => {
    collectionIndex.value = index
    currentCollection.value = resourceCollection.value[collection]
}
</script>