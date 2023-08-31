<template>
    <NDataTable :bordered="false" :columns="columns" :data="rowData" class="text-base" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NTag, NDataTable } from 'naive-ui'
import { useMirrorListStore } from './MirrorListStore'
import { storeToRefs } from 'pinia'
const store = useMirrorListStore()
const { rowData } = storeToRefs(store)

type RowData = {
    key: number
    name: string
    lastUpdate: string
    status: string
}

const getTagType = (status: string) => {
    switch (status) {
        case 'success':
            return 'success'
        case 'syncing':
            return 'info'
        case 'failed':
            return 'error'
    }
}

const createColumns = function (): DataTableColumns<RowData> {
    return [
        {
            title: 'Name',
            minWidth: 200,
            key: 'name',
        },
        {
            title: 'Last Update',
            minWidth: 200,
            key: 'lastUpdate',
        },
        {
            title: 'Status',
            key: 'status',
            render(row) {
                const status = row.status
                return h(
                    NTag,
                    {
                        style: {
                            marginRight: '6px',
                        },
                        type: getTagType(status),
                    },
                    {
                        default: () => status,
                    },
                )
            },
        },
    ]
}
const columns = ref(createColumns())
</script>
