<template>
    <UTable :columns="columns" :rows="rowData">
        <template #status-data="{ row }">
            <UBadge :color="getTagType(row.status)">{{ row.status }}</UBadge>
        </template>
    </UTable>
</template>

<script setup lang="ts">
import { useMirrorListStore } from './MirrorListStore'
import { storeToRefs } from 'pinia'
const store = useMirrorListStore()
const { rowData } = storeToRefs(store)

const getTagType = (status: string) => {
    switch (status) {
        case 'success':
            return 'primary'
        case 'syncing':
            return 'sky'
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
</script>
