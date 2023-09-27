const { writeFile, readFile } = require('fs').promises;

writeFile('./temporary/fileB.txt', 'Line 1\n')
  .then(() => {
    return writeFile('./temporary/fileB.txt', 'Line 2\n', { flag: 'a' });
  })
  .then(() => {
    return writeFile('./temporary/fileB.txt', 'Line 3\n', { flag: 'a' });
  })
  .then(() => {
    return readFile('./temporary/fileB.txt', 'utf-8');
  })
  .then((data) => {
    console.log('File content:\n', data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
