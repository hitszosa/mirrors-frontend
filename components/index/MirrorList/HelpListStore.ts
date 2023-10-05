import { defineStore } from 'pinia'
import { fetchMockHelpList } from './mockHelpList'

const fetchHelpList = async () => {
  const res = await fetch('https://mirrors-help.osa.moe/help_list.json')
  return await res.json()
}

export const useHelpListStore = defineStore('help-list', () => {
  const helpList = ref<string[]>([])
  const createData = async () => {
    helpList.value = await fetchHelpList()
  }
  onMounted(async () => {
    await createData()
  })
  return {
    helpList,
  }
})
