<template>
  <AppCard
    :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800', base: 'h-full overflow-auto' }"
    class="text-slate-800 dark:text-slate-100"
  >
    <template #header>
      <div class="flex flex-row justify-between">
        <BaseSectionHeading compact>
          <template #icon>
            <Icon name="icon-park-outline:record-disc" />
          </template>
          <span id="download-modal-title">Get LiveCD & Software</span>
        </BaseSectionHeading>
        <AppButton
          :ui="{ rounded: 'rounded-full' }"
          color="white"
          variant="ghost"
          size="sm"
          aria-label="Close dialog"
          @click="$emit('close')"
        >
          <Icon name="icon-park-outline:close" />
        </AppButton>
      </div>
    </template>
    <div
      v-if="collections.length > 0"
      class="flex flex-row space-x-6 max-h-full"
    >
      <BaseRadioSelection
        :items="collections"
        :index="collectionIndex"
        @update:index="onCollectionUpdate"
      />
      <ul class="grow list-disc p-1 pl-6 text-lg space-y-1 max-h-full overflow-scroll">
        <li
          v-for="resource in currentCollection"
          :key="resource.name"
        >
          <a
            :href="resource.link"
            target="_blank"
            class="text-blue-500"
          >
            {{ resource.name }}
          </a>
        </li>
      </ul>
    </div>
    <div
      v-else
      class="flex flex-row space-x-6"
    >
      <AppSkeleton class="h-[32em] w-40" />
      <AppSkeleton class="h-[32em] grow" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppButton from '~/components/ui/AppButton.vue'
import AppCard from '~/components/ui/AppCard.vue'
import AppSkeleton from '~/components/ui/AppSkeleton.vue'
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
