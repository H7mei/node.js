import {readFile, writeFile} from 'fs/promises';

// baca file template
let template = await readFile(
  new URL('./themplate.html', import.meta.url),
  'utf-8',
);

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node',
};

// > Object.entries(data)
// [ [ 'hann', 'hann' ], [ 'jeje', 'jeje' ] ]

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

console.log(template);

// write file
await writeFile(new URL('./index.xasdasdq', import.meta.url), template);
