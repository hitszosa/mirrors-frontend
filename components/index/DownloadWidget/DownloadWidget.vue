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
    <UButton
      color="white"
      variant="solid"
      block
      class="transition h-9"
      @click="onToggleModal"
    >
      Get LiveCD & Software
    </UButton>
    <UModal
      v-model="isOpen"
      :ui="{ base: 'relative text-left rtl:text-right w-full flex flex-col', width: 'sm:max-w-2xl', height: 'h-[calc(100vh-4em)]' }"
    >
      <IndexDownloadModal @close="onCloseModal" />
    </UModal>
  </section>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const onToggleModal = () => {
  isOpen.value = true
}

const onCloseModal = () => {
  isOpen.value = false
}
</script>
