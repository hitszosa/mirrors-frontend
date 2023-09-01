export type Resource = {
    name: string
    link: string
}
export type ResourceCollection = Record<string, Resource[]>
export type ResourceDirectory = Record<string, ResourceCollection>
