import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { rootFolder } from './utils.mjs';

const allBenches = await readdir(join(rootFolder, 'bench')).then(items => {
  return items.filter(item => item.endsWith('.js'));
});

const benchJobs = allBenches.map(benchFile => {
  const jobName = benchFile
    .replace('.js', '')
    .replace(/[^a-zA-Z\-_]/g, '_')
    .slice(0, 100);

  return `
  ${jobName}:
    name: Running "${benchFile}"
    uses: ./.github/workflows/bench.yml
    with:
      bench-file: bench/${benchFile}
`;
});

const template = `
name: 'Run All'

on:
  workflow_dispatch:

jobs:
  ${benchJobs.join('')}
`;

await writeFile(join(rootFolder, '.github', 'workflows', 'run_all.yml'), template);
