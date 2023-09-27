const { writeFile, readFile } = require('fs').promises;

const writer = async () => {
  try {
    await writeFile('./temporary/fileB.txt', 'Line 1\n');
    await writeFile('./temporary/fileB.txt', 'Line 2\n', { flag: 'a' });
    await writeFile('./temporary/fileB.txt', 'Line 3\n', { flag: 'a' });
    console.log('File writing completed.');
  } catch (error) {
    console.error('Error occurred while writing the file:', error);
  }
};

const reader = async () => {
  try {
    const data = await readFile('./temporary/fileB.txt', 'utf-8');
    console.log('File content:\n', data);
  } catch (error) {
    console.error('Error occurred while reading the file:', error);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};

readWrite();
