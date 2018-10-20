let fs = require('fs');

let readStream = fs.createReadStream('12.psd');
let writeStream = fs.createWriteStream('12-2.psd');

readStream.on('data', (chunk) => {
	console.log('data open');
	if (writeStream.write(chunk) === false) {
		// 如果数据未写完，则暂停读取
		console.log('still cached');
		
		readStream.pause();
	}
})

readStream.on('end', () => {
	console.log('over');
	
	writeStream.end();
}).on('error', (e) => {
	console.log(e);
});

writeStream.on('drain', () => {
	// 当数据写完后，继续读取数据
	console.log('data drains');
	
	readStream.resume();
});