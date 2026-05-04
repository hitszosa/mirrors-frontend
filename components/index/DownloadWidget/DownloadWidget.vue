<template>
  <section class="space-y-4">
    <h2 class="flex flex-nowrap space-x-1.5 text-2xl font-medium">
      <span class="inline-block translate-y-[3px]">
        <IconifyIcon icon="icon-park-outline:record-disc" />
      </span>
      <span
        class="transition-colors after:transition-all relative inline-block z-10
        after:block after:absolute after:bg-brand-soft/80 after:rounded-md
        after:w-4 after:h-1 after:-right-5 after:bottom-1 after:-z-10
        hocus:after:w-full hocus:after:h-2 hocus:after:right-0"
      >
        LiveCD & Software
      </span>
    </h2>
    <p>
      在此处下载本站镜像的 Linux 发行版 LiveCD 和开源软件。
    </p>
    <button
      type="button"
      class="inline-flex h-9 w-full items-center justify-center gap-2 rounded-xl bg-surface px-4 text-base font-medium text-fg shadow-sm ring-1 ring-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hocus:border-brand/50 hocus:bg-surface-muted hocus:text-brand"
      @click="onToggleModal"
    >
      Get LiveCD & Software
    </button>
    <AppModal
      v-model="isOpen"
      aria-labelledby="download-modal-title"
    >
      <IndexDownloadModal @close="onCloseModal" />
    </AppModal>
  </section>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { ref } from 'vue'
import AppModal from '~/components/ui/AppModal.vue'
import IndexDownloadModal from '../DownloadModal/DownloadModal.vue'

const isOpen = ref(false)

const onToggleModal = () => {
  isOpen.value = true
}

const onCloseModal = () => {
  isOpen.value = false
}
</script>
