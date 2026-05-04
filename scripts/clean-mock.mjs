import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { access, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const defaultRootDir = resolve(scriptDir, '..');
const execFileAsync = promisify(execFile);

const generatedFiles = [
  'public/tunasync_status.json',
  'public/static/res_link.json',
  'public/help_list.json',
];

async function isTrackedByGit(rootDir, file) {
  try {
    await execFileAsync('git', ['ls-files', '--error-unmatch', '--', file], {
      cwd: rootDir,
    });
    return true;
  } catch (error) {
    if (error.code === 1) {
      return false;
    }

    throw error;
  }
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function cleanMockdata(rootDir = defaultRootDir) {
  const trackedFiles = [];

  for (const file of generatedFiles) {
    if (
      (await isTrackedByGit(rootDir, file)) &&
      (await fileExists(resolve(rootDir, file)))
    ) {
      trackedFiles.push(file);
    }
  }

  if (trackedFiles.length > 0) {
    throw new Error(
      `Refusing to delete tracked mockdata copy: ${trackedFiles[0]}`,
    );
  }

  for (const file of generatedFiles) {
    await rm(resolve(rootDir, file), { force: true });
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    await cleanMockdata();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
