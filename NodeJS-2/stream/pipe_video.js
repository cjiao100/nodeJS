let fs = require('fs');

fs.createReadStream('12.psd').pipe(fs.createWriteStream('12-2.psd'));
