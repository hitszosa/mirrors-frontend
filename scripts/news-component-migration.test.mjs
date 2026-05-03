import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

async function readProjectFile(relativePath) {
  return readFile(join(rootDir, relativePath), 'utf8')
}

test('home and news pages use Astro news presentation components directly', async () => {
  const homePage = await readProjectFile('src/pages/index.astro')
  const newsIndexPage = await readProjectFile('src/pages/news/index.astro')

  assert.match(homePage, /import NewsWidget from '\.\.\/\.\.\/components\/index\/NewsWidget\/NewsWidget\.astro'/)
  assert.match(homePage, /<NewsWidget digests=\{news\} \/>/)
  assert.doesNotMatch(homePage, /NewsWidget\.vue/)
  assert.doesNotMatch(homePage, /<NewsWidget client:load/)

  assert.match(newsIndexPage, /import NewsList from '\.\.\/\.\.\/\.\.\/components\/news\/NewsList\.astro'/)
  assert.match(newsIndexPage, /<NewsList digests=\{news\} \/>/)
  assert.doesNotMatch(newsIndexPage, /news\.map\(/)
})

test('news presentation components are migrated from Vue to Astro', async () => {
  const widget = await readProjectFile('components/index/NewsWidget/NewsWidget.astro')
  const widgetItem = await readProjectFile('components/index/NewsWidget/NewsWidgetItem.astro')
  const list = await readProjectFile('components/news/NewsList.astro')
  const listItem = await readProjectFile('components/news/NewsListItem.astro')

  assert.match(widget, /Recent News/)
  assert.match(widget, /Read More/)
  assert.match(widget, /NewsWidgetItem\.astro/)
  assert.match(widgetItem, /new Intl\.DateTimeFormat\('zh-CN'/)
  assert.match(widgetItem, /timeZone: 'UTC'/)
  assert.doesNotMatch(widgetItem, /fromNow\(\)/)
  assert.match(widgetItem, /icon-park-outline:align-text-left/)
  assert.match(list, /NewsListItem\.astro/)
  assert.match(listItem, /new Intl\.DateTimeFormat\('zh-CN'/)
  assert.match(listItem, /icon-park-outline:tag-one/)
})
