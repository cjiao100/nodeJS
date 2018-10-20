let Readable = require('stream').Readable;
let Writable = require('stream').Writable;

let readStream = new Readable();
let writStream = new Writable();

readStream.push('I ');
readStream.push('Love ');
readStream.push('Imooc\n');
readStream.push(null);

writStream._write = (chunk, encoding, callback) => {
	console.log(chunk.toString());
	
	callback();
};

readStream.pipe(writStream);
