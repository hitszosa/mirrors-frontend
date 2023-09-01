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
        <UTabs :items="tabs" class="w-full">
        </UTabs>
        <template #footer>
            <!-- Content -->
        </template>
    </UCard>
</template>

<script setup lang="ts">
import { mockResourceDirectories } from './mockResourceDirectories';

defineEmits<{
    close: []
}>()

const resourceDirectory = ref(mockResourceDirectories)
console.log(resourceDirectory.value.target)
const tabs = computed(() => {
    const categories = resourceDirectory.value.keys
    return categories.array.forEach(p => {
        label: p
    });
})
</script>