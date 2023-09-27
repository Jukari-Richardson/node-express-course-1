// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

module.export = MY_VAR="Hi There!"

console.log(__dirname, process.env.MY_VAR)
setInterval(() => {
  console.log('hello world')
}, 1000)

