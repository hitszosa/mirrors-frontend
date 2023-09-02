<template>
    <BaseSectionHeading>
        <template v-slot:icon>
            <Icon name="icon-park-outline:dropbox"></Icon>
        </template>
        Index of Mirrors
    </BaseSectionHeading>
    <UTable
        ref="table"
        :columns="columns"
        :rows="rows"
        :loading="loading"
        :ui="{
            td: { size: 'text-base', padding: 'px-3 py-2.5' },
            th: { size: 'text-base', padding: 'px-3 py-3' },
        }"
    >
        <template #status-data="{ row }">
            <UBadge :color="getTagType(row.status)">{{ row.status }}</UBadge>
        </template>
        <template #files-data="{ row }">
            <NuxtLink
                v-if="row.files"
                :to="row.files"
                target="_blank"
                class="transition text-lg hocus:text-blue-400"
            >
                <Icon name="icon-park-outline:folder-open" />
            </NuxtLink>
        </template>
    </UTable>
</template>

<script setup lang="ts">
import { UTable } from '#build/components'
import { useMirrorListStore } from './MirrorListStore'
import { storeToRefs } from 'pinia'
const store = useMirrorListStore()
const { rows, loading } = storeToRefs(store)

const getTagType = (status: string) => {
    switch (status) {
        case 'success':
            return 'primary'
        case 'syncing':
            return 'blue'
        case 'failed':
            return 'red'
    }
}

const createColumns = function () {
    return [
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'files',
            label: 'Files',
        },
        {
            key: 'lastUpdate',
            label: 'Last Update',
        },
        {
            key: 'status',
            label: 'Status',
        },
    ]
}
const columns = ref(createColumns())
const table = ref<InstanceType<typeof UTable> | null>(null)

// Add Hover Effect on TableRow
const addHoverEffect = () => {
    if (!table || !table.value) return
    table.value.$el
        .querySelectorAll('tr')
        .forEach((item: HTMLTableRowElement) => {
            item.classList.add('hover:bg-gray-50')
            item.classList.add('dark:hover:bg-gray-800/50')
        })
}

onMounted(() => {
    addHoverEffect()
})
</script>
