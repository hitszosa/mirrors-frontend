<template>
  <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800', base: 'h-full overflow-auto', }" text-slate-800>
    <template #header>
      <div class="flex flex-row justify-between">
        <BaseSectionHeading compact>
          <template #icon>
            <Icon name="icon-park-outline:record-disc" />
          </template>
          Get LiveCD & Software
        </BaseSectionHeading>
        <UButton :ui="{ rounded: 'rounded-full' }" color="white" variant="ghost" size="sm" @click="$emit('close')">
          <Icon name="icon-park-outline:close" />
        </UButton>
      </div>
    </template>
    <div v-if="collections.length > 0" class="flex flex-row space-x-6 max-h-full">
      <BaseRadioSelection :items="collections" :index="collectionIndex" @update:index="onCollectionUpdate" />
      <ul class="grow list-disc p-1 pl-6 text-lg space-y-1 max-h-full overflow-scroll">
        <li v-for="resource in currentCollection" :key="resource.name">
          <a :href="resource.link" target="_blank" class="text-blue-500">
            {{ resource.name }}
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="flex flex-row space-x-6">
      <USkeleton class="h-[32em] w-40" />
      <USkeleton class="h-[32em] grow" />
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDownloadStore } from './DownloadStore'

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
