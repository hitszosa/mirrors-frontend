import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

async function readProjectFile(relativePath) {
  return readFile(join(rootDir, relativePath), 'utf8')
}

test('interactive vue components inline lightweight helper markup', async () => {
  const navbar = await readProjectFile('components/Navbar.vue')
  const mirrorList = await readProjectFile('components/index/MirrorList/MirrorList.vue')
  const downloadWidget = await readProjectFile('components/index/DownloadWidget/DownloadWidget.vue')
  const downloadModal = await readProjectFile('components/index/DownloadModal/DownloadModal.vue')

  for (const content of [navbar, mirrorList, downloadWidget, downloadModal]) {
    assert.doesNotMatch(content, /Icon\.vue/)
    assert.doesNotMatch(content, /SectionHeading\.vue/)
  }

  assert.doesNotMatch(navbar, /NavButton\.vue/)
  assert.doesNotMatch(navbar, /SlidingTransition\.vue/)
  assert.match(navbar, /from '@iconify\/vue'/)
  assert.match(navbar, /<Transition/)

  assert.doesNotMatch(mirrorList, /AppBadge\.vue/)
  assert.doesNotMatch(mirrorList, /AppInput\.vue/)
  assert.match(mirrorList, /<input/)
  assert.match(mirrorList, /rounded-full px-2\.5 py-1 text-xs font-medium capitalize/)

  assert.doesNotMatch(downloadWidget, /AppButton\.vue/)
  assert.match(downloadWidget, /<button/)

  assert.doesNotMatch(downloadModal, /AppButton\.vue/)
  assert.doesNotMatch(downloadModal, /AppCard\.vue/)
  assert.doesNotMatch(downloadModal, /AppSkeleton\.vue/)
  assert.match(downloadModal, /rounded-2xl bg-white/)
  assert.match(downloadModal, /shadow-xl ring-1 ring-slate-200/)
  assert.match(downloadModal, /animate-pulse rounded-xl bg-slate-200 dark:bg-slate-700/)
})

test('astro news components use astro icon and heading helpers', async () => {
  const icon = await readProjectFile('components/Icon.astro')
  const heading = await readProjectFile('components/base/SectionHeading.astro')
  const widget = await readProjectFile('components/index/NewsWidget/NewsWidget.astro')
  const widgetItem = await readProjectFile('components/index/NewsWidget/NewsWidgetItem.astro')
  const listItem = await readProjectFile('components/news/NewsListItem.astro')

  assert.match(icon, /from '@iconify\/vue'/)
  assert.match(heading, /compact \? 'text-xl' : 'text-2xl'/)
  assert.match(widget, /SectionHeading\.astro/)
  assert.match(widget, /\.\.\/\.\.\/Icon\.astro/)
  assert.doesNotMatch(widget, /SectionHeading\.vue/)
  assert.doesNotMatch(widget, /Icon\.vue/)
  assert.match(widgetItem, /\.\.\/\.\.\/Icon\.astro/)
  assert.match(listItem, /\.\.\/Icon\.astro/)
})
