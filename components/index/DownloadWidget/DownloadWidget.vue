<template>
  <section class="space-y-4">
    <BaseSectionHeading>
      <template #icon>
        <Icon name="icon-park-outline:record-disc" />
      </template>
      LiveCD & Software
    </BaseSectionHeading>
    <p>
      在此处下载本站镜像的 Linux 发行版 LiveCD 和开源软件。
    </p>
    <AppButton
      color="white"
      variant="solid"
      block
      class="transition-colors h-9"
      @click="onToggleModal"
    >
      Get LiveCD & Software
    </AppButton>
    <AppModal
      v-model="isOpen"
    >
      <IndexDownloadModal @close="onCloseModal" />
    </AppModal>
  </section>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import AppModal from '~/components/ui/AppModal.vue'

const isOpen = ref(false)

const onToggleModal = () => {
  isOpen.value = true
}

const onCloseModal = () => {
  isOpen.value = false
}
</script>
