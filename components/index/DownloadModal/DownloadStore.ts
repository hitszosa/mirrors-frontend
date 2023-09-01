import { defineStore } from 'pinia'
import { fetchMockResourceCollection } from './mockResourceCollection'

export type Resource = {
    name: string
    link: string
}
export type ResourceCollection = Record<string, Resource[]>

const fetchResourceCollection = async () => {
    return await fetch('http://10.249.12.85/static/isoLinks2.json')

export const useDownloadStore = defineStore('resource-collection', () => {
    const resourceCollection = ref<ResourceCollection>({})
    const createData = async () => {
        resourceCollection.value = await fetchMockResourceCollection()
    }
    onMounted(async () => {
        await createData()
    })
    return {
        resourceCollection,
    }
})
