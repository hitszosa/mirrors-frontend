import { execFileSync } from 'node:child_process'
import { mkdtemp, mkdir, writeFile, access } from 'node:fs/promises'
import os from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'

import { cleanFixtures } from './clean-fixtures.mjs'

async function createRepoFixture(paths) {
  const rootDir = await mkdtemp(join(os.tmpdir(), 'clean-fixtures-'))

  execFileSync('git', ['init'], { cwd: rootDir, stdio: 'ignore' })

  for (const [file, tracked] of paths) {
    const fullPath = join(rootDir, file)
    await mkdir(join(fullPath, '..'), { recursive: true })
    await writeFile(fullPath, '{}\n')

    if (tracked) {
      execFileSync('git', ['add', file], { cwd: rootDir, stdio: 'ignore' })
    }
  }

  return rootDir
}

test('refuses to delete tracked fixture copies', async () => {
  const rootDir = await createRepoFixture([
    ['public/tunasync_status.json', true],
  ])

  await assert.rejects(
    cleanFixtures(rootDir),
    /Refusing to delete tracked fixture copy: public\/tunasync_status\.json/
  )
})

test('deletes untracked fixture copies and ignores missing files', async () => {
  const rootDir = await createRepoFixture([
    ['public/tunasync_status.json', false],
  ])

  await cleanFixtures(rootDir)

  await assert.rejects(access(join(rootDir, 'public/tunasync_status.json')))
})
