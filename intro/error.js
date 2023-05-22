import {readFile} from 'fs';

// 1
// fs.readFile(filePath, (error, result) => {
//   if (error) {
//     // do something
//   } else {
//     // yaaay
//   }
// })

// 2
// try {
//   const result = syncAction()
// } catch (e) {
//   // handle error
// }

process.on('uncaughtException', (e) => {
  console.log(e);
});

await readFile(new URL('index.mjs', import.meta.url), 'utf-8');
