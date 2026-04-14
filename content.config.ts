import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    news: defineCollection({
      source: 'news/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
        description: z.string(),
      }),
    }),
    fallback: defineCollection({
      source: '*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
      }),
    }),
  },
})
