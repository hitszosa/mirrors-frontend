import { cp, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, '..');

const copies = [
  ['mock/tunasync_status.json', 'public/tunasync_status.json'],
  ['mock/static/res_link.json', 'public/static/res_link.json'],
  ['mock/help_list.json', 'public/help_list.json'],
];

for (const [source, target] of copies) {
  const sourcePath = resolve(rootDir, source);
  const targetPath = resolve(rootDir, target);

  await mkdir(dirname(targetPath), { recursive: true });
  await cp(sourcePath, targetPath);
}
