const benchFile = process.env.BENCH_FILE;
const benchResult = JSON.parse(process.env.BENCH_RESULT);

const fs = require('fs');

for (const nodeVersion of Object.keys(benchResult)) {
  const major = nodeVersion.split('.')[0];
  const result = benchResult[nodeVersion].result;
  const outputFolder = `./${major}/${nodeVersion}`;

  if (!fs.existsSync()) {
    fs.mkdirSync(outputFolder, {
      recursive: true,
    });
  }

  fs.writeFileSync(`${outputFolder}/${benchFile}.md`, result, 'utf-8');
}
