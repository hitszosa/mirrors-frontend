import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const modalPath = new URL('../components/ui/AppModal.vue', import.meta.url)
const downloadModalPath = new URL('../components/index/DownloadModal/DownloadModal.vue', import.meta.url)

test('download modal has explicit dialog height and inner scroll chain', async () => {
  const modalSource = await readFile(modalPath, 'utf8')
  const downloadModalSource = await readFile(downloadModalPath, 'utf8')

  assert.match(modalSource, /h-\[calc\(100vh-4em\)\]/, 'AppModal dialog should define an explicit height')
  assert.match(downloadModalSource, /min-h-0 grow border-t/, 'DownloadModal content area should be a shrinkable flex child')
  assert.match(downloadModalSource, /class="flex flex-row min-h-0 h-full space-x-6"/, 'DownloadModal main row should fill available height and allow children to shrink')
  assert.match(downloadModalSource, /class="grow min-h-0 overflow-y-auto list-disc/, 'DownloadModal list should scroll vertically within remaining height')
})
