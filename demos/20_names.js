const {basename, dirname, extname} = require('path');

const filePath = 'C://user/1.html';

console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));