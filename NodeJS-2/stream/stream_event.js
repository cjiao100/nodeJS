// 流事件
let fs = require('fs');

// 创建一个可读的流
let readable = fs.createReadStream('./stream_copy_logo.js');
let n = 0;

readable.on('data', (chunk) => {
	// 数据传输时触发data事件
	console.log('data emits');
	
	// 判断是否以Buffer对象的形式进行传输
	console.log(Buffer.isBuffer(chunk));
	
	n++;
	// 暂停流
	readable.pause();
	console.log('data pause');
	setTimeout(() => {
		console.log('data pause end');
		// 启动流
		readable.resume();
	}, 3000)
}).on('close', () => {
	// 流结束
	console.log('data close');
}).on('end', () => {
	console.log(n);
	//	传输结束
	console.log('data end');
})/*.on('readable', () => {
	//	文件可读
	console.log('data readable');
})*/.on('error', (e) => {
	console.log('data read error' + e);
});

/*readable.on('data', (chunk) => {
	console.log(`接收到 ${chunk.length} 个字节的数据`);
	// 数据传输时触发data事件
	console.log('data emits');
	
	// 判断是否以Buffer对象的形式进行传输
	console.log(Buffer.isBuffer(chunk));
	
	console.log(chunk.toString('utf8'));
}).on('readable', function () {
	//	文件可读
	console.log('data readable');
}).on('end', function () {
	//	传输结束
	console.log('data end');
}).on('close', function () {
	// 流结束
	console.log('data close');
}).on('error', function (e) {
	console.log('data read error' + e);
});*/
