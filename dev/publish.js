//devtool to publish built app files into backend client path
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const pathToCopy = path.resolve(__dirname,'../build');
console.log('Path to copy:', pathToCopy);

const pathToClean = path.resolve(__dirname,'../../d2lm/client');
console.log('Path to clean:', pathToClean);

(async()=>{
    try{
        await fsPromises.rm(pathToClean, {recursive: true});
    }catch(err){
        console.log(err);
    }
    await fsPromises.mkdir(pathToClean);
    await fsPromises.cp(pathToCopy,pathToClean, {recursive: true}).then(()=>{console.log('done');});
})();
