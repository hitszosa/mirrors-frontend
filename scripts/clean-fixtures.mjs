import { rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(scriptDir, '..')

const generatedFiles = [
  'public/tunasync_status.json',
  'public/static/res_link.json',
]

for (const file of generatedFiles) {
  await rm(resolve(rootDir, file), { force: true })
}
