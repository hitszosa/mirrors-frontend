<template>
  <section class="flex flex-col h-full overflow-hidden rounded-2xl bg-surface text-fg shadow-xl ring-1 ring-border">
    <header class="p-6">
      <div class="flex flex-row justify-between">
        <h2 class="flex flex-nowrap space-x-1.5 text-xl font-medium">
          <span class="inline-block translate-y-[3px]">
            <IconifyIcon icon="icon-park-outline:record-disc" />
          </span>
          <span
            id="download-modal-title"
            class="transition-colors after:transition-all relative inline-block z-10 after:block after:absolute after:bg-brand-soft/80 after:rounded-md after:w-4 after:h-1 after:-right-5 after:bottom-1 after:-z-10 hocus:after:w-full hocus:after:h-2 hocus:after:right-0"
          >
            Get LiveCD & Software
          </span>
        </h2>
        <button
          type="button"
          aria-label="Close dialog"
          class="inline-flex min-h-8 items-center justify-center gap-2 rounded-full bg-transparent px-3 text-sm text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hocus:bg-surface-muted hocus:text-brand"
          @click="$emit('close')"
        >
          <IconifyIcon icon="icon-park-outline:close" />
        </button>
      </div>
    </header>
    <div class="min-h-0 grow h-full border-t border-border p-6">
      <div
        v-if="collections.length > 0"
        class="flex flex-row min-h-0 h-full space-x-6"
      >
        <BaseRadioSelection
          :items="collections"
          :index="collectionIndex"
          @update:index="onCollectionUpdate"
        />
        <ul class="grow h-full min-h-0 overflow-y-auto list-disc p-1 pl-6 text-lg space-y-1">
          <li
            v-for="resource in currentCollection"
            :key="resource.name"
          >
            <a
              :href="resource.link"
              target="_blank"
              class="rounded-sm text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hocus:text-brand-strong"
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
        <div class="h-[32em] w-40 animate-pulse rounded-xl bg-surface-muted" />
        <div class="h-[32em] grow animate-pulse rounded-xl bg-surface-muted" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import BaseRadioSelection from '~/components/base/RadioSelection.vue'
import { useDownloadStore } from './DownloadStore'

const store = useDownloadStore()
const { resourceCollection } = storeToRefs(store)

defineEmits<{
  close: []
}>()

const collectionIndex = ref(0)

const collections = computed(() => Object.keys(resourceCollection.value))
const currentCollection = computed(() => {
  const selectedCollection = collections.value[collectionIndex.value]
  return selectedCollection ? resourceCollection.value[selectedCollection] ?? [] : []
})

const onCollectionUpdate = (_collection: string, index: number) => {
  collectionIndex.value = index
}
</script>
