const fs = require('fs');
//importing fs module to be used 

const filePath = './temporary/fileB.txt';
//directing file path 
const lines = ['Line 1', 'Line 2', 'Line 3'];
//create lines to be passed into write file as an array to save time 


function writeLinesToFileAsync(lines, index) {
  if (index >= lines.length) {
    console.log('All lines written successfully.');
    return;
  }

  //checking if current line has been written using the line and index parameter
 
  const line = lines[index];
  const flags = index === 0 ? 'w' : 'a';
  //retrieves the current line and determines the flag to use for
  // the writeFile function ('w' for the first line and 'a' for subsequent lines to append).

  fs.writeFile(filePath, line + '\n', { flag: flags }, (error) => {
    if (error) {
      console.error('Error writing to file:', error);
    } else {
      console.log('Line', index +1, 'written successfully.');

      writeLinesToFileAsync(lines, index + 1); // Call the next line recursively
    }
  });
}

//If there is an error, we log an error message. 
//Otherwise,log a success message and recursively call writeLinesToFileAsync for the next line (incrementing the index)

writeLinesToFileAsync(lines, 0);
