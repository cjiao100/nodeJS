// 流传输
let fs = require('fs');
let source = fs.readFileSync('../buffer/logo.png');

fs.writeFileSync('stream_copy_logo.png', source);

