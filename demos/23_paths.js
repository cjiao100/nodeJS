const mod = require('./02_cusmod');
const path = require('path');


console.log(mod.testVar);

console.log('__dirname     ', __dirname);
console.log('process.cwd() ', process.cwd());
console.log('./            ', path.resolve('./'));