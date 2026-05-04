<template>
  <button
    type="button"
    class="inline-flex h-9 w-full items-center justify-center gap-2 rounded-xl bg-surface px-4 text-base font-medium text-surface-fg shadow-sm ring-1 ring-surface-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hocus:border-primary/50 hocus:bg-page-bg hocus:text-primary hover:cursor-pointer"
    @click="onToggleModal"
  >
    Get LiveCD & Software
  </button>
  <AppModal v-model="isOpen" aria-labelledby="download-modal-title">
    <IndexDownloadModal @close="onCloseModal" />
  </AppModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppModal from '@components/ui/AppModal.vue';
import IndexDownloadModal from '../DownloadModal/DownloadModal.vue';

const isOpen = ref(false);

const onToggleModal = () => {
  isOpen.value = true;
};

const onCloseModal = () => {
  isOpen.value = false;
};
</script>
