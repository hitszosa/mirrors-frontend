import { defineStore } from 'pinia'
import * as dayjs from 'dayjs'

type RowData = {
  id: number
  name: string
  files: string
  lastUpdate: string
  status: string
}

const getMirrorListData = async () => {
  return await fetch('/tunasync_status.json')
}

export const useMirrorListStore = defineStore('mirror-list', () => {
  const rows = ref<RowData[]>([])
  const rawData = ref(null)
  const loading = ref(true)
  const createData = async () => {
    const tunasync = await getMirrorListData()
    const data = await tunasync.json()
    rawData.value = data
    rows.value = data
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item, idx) => {
        return {
          id: idx,
          name: item.name,
          files: `/${item.name}/`,
          lastUpdate: dayjs
            .unix(item.last_update_ts)
            .format('YYYY-MM-DD HH:mm'),
          status: item.status,
        }
      })
    loading.value = false
  }
  onMounted(async () => {
    await createData()
  })
  return {
    rows,
    loading,
    rawData,
  }
})
