import type { CollectionEntry } from 'astro:content'
import type { ArticleDigest } from '../../components/news/ArticleDigest'

export const toArticleDigest = (entry: CollectionEntry<'news'>): ArticleDigest => ({
  _path: `/news/${entry.slug}`,
  title: entry.data.title,
  description: entry.data.description,
  date: entry.data.date.toISOString(),
  tags: entry.data.tags,
})

export const sortNewsByDateDesc = (entries: CollectionEntry<'news'>[]) => {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}
