import { defineStore } from 'pinia'
import { fetchResourceCollection } from './mockResourceCollection'

export type Resource = {
    name: string
    link: string
}
export type ResourceCollection = Record<string, Resource[]>

export const useDownloadStore = defineStore('resource-collection', () => {
    const resourceCollection = ref<ResourceCollection>({})
    const createData = async () => {
        resourceCollection.value = await fetchResourceCollection()
    }
    onMounted(async () => {
        await createData()
    })
    return {
        resourceCollection,
    }
})
