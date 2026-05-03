import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

async function readProjectFile(relativePath) {
  return readFile(join(rootDir, relativePath), 'utf8')
}

test('layout uses Astro footer component with preserved spacing', async () => {
  const layout = await readProjectFile('src/layouts/Layout.astro')

  assert.match(layout, /import Footer from '\.\.\/\.\.\/components\/Footer\.astro'/)
  assert.match(layout, /<Footer class="mt-6" \/>/)
  assert.doesNotMatch(layout, /Footer\.vue/)
  assert.match(layout, /<Navbar client:load titleName="HITSZ OSA Mirrors" currentPath=\{currentPath\}>/)
})

test('static components are migrated from Vue to Astro', async () => {
  const footer = await readProjectFile('components/Footer.astro')
  const footerLink = await readProjectFile('components/FooterLink.astro')
  const notFound = await readProjectFile('components/NotFound.astro')

  assert.match(footer, /import FooterLink from '\.\/FooterLink\.astro'/)
  assert.match(footer, /本站由哈尔滨工业大学（深圳）开源技术协会运营/)
  assert.match(footer, /https:\/\/github\.com\/hitszosa/)
  assert.match(footer, /https:\/\/github\.com\/hitszosa\/Mirrors\/issues\/new/)
  assert.match(footerLink, /rel="noreferrer"/)
  assert.match(footerLink, /target="_blank"/)
  assert.match(notFound, /404 Not Found/)
  assert.match(notFound, /This petite verse is graciously presented by ChatGPT\./)
})
