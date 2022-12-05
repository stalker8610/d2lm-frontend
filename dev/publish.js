const fs = require('node:fs');
const path = require('node:path');



const pathToCopy = path.resolve(__dirname,'../build');
console.log('Path to copy:', pathToCopy);

const pathToClean = path.resolve(__dirname,'../../d2lm/client');
console.log('Path to clean:', pathToClean);

fs.rmdirSync(pathToClean, {recursive: true});
fs.cp(pathToCopy,pathToClean, {recursive: true}).then(()=>console.log('done'));

