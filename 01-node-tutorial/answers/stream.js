const fs = require('fs');

const readStream = fs.createReadStream('../content/big.txt', {
    encoding: 'utf-8',
    highWaterMark: 200
});

let counter = 0; 

readStream.on('data', (chunk) => {
    counter++;
    console.log(chunk);
    });

readStream.on('end', () => {
    console.log(`Number of chunks received: ${counter}`);
});

readStream.on('error', (error) => {
  console.log('An error occurred:', error);
});
