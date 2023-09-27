const {writeFileSync, readFileSync} = require('fs')
writeFileSync ('./temporary/fileA.txt', 'Code The Dream\n')
writeFileSync ('./temporary/fileA.txt', 'New Message\n', {flag:'a'})
writeFileSync ('./temporary/fileA.txt', 'Second Nw Message', {flag:'a'})
const fileContent = readFileSync('./temporary/fileA.txt', 'utf-8')
console.log(fileContent);
