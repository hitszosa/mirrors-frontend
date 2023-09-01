<template>
    <section class="space-y-4">
        <BaseSectionHeading>
            <template #icon>
                <Icon name="icon-park-outline:record-disc"></Icon>
            </template>
            Get LiveCD and Software
        </BaseSectionHeading>
        <p>
            在此处下载本站镜像的 Linux 发行版 LiveCD 和开源软件。
        </p>
        <UButton color="white" variant="solid" block @click="onToggleModal" class="transition delay-50">
            获取 LiveCD 和软件
        </UButton>
        <UModal v-model="isOpen">
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