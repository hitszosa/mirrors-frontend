import { defineStore } from 'pinia'
import * as dayjs from 'dayjs'

export const useMirrorListStore = defineStore('mirror-list', () => {
    const rowData = ref([])
    const createData = async function () {
        const tunasync = await fetch('/api/getMirrorListData')
        const data = await tunasync.json()
        rowData.value = data
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, idx) => {
                return {
                    key: idx,
                    name: item.name,
                    lastUpdate: dayjs
                        .unix(item['last_update_ts'])
                        .format('YYYY-MM-DD HH:mm'),
                    status: item.status,
                }
            })
    }
    onMounted(async () => {
        await createData()
    })
    return {
        rowData,
    }
})
