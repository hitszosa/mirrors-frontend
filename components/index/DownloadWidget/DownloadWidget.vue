<template>
    <section class="space-y-4">
        <BaseSectionHeading>
            <template #icon>
                <Icon name="icon-park-outline:record-disc"></Icon>
            </template>
            LiveCD & Software
        </BaseSectionHeading>
        <p>
            在此处下载本站镜像的 Linux 发行版 LiveCD 和开源软件。
        </p>
        <UButton color="white" variant="solid" block @click="onToggleModal" class="transition delay-50">
            Get LiveCD & Software
        </UButton>
        <UModal v-model="isOpen" class="w-full"
            :ui="{ base: 'overflow-auto relative text-left rtl:text-right w-full flex flex-col', width: 'sm:max-w-2xl' }">
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
