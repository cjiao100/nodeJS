const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
	const num = parseInt(Math.random() * 10);
	console.log(num);
	if (num < 8) {
		ws.write(num + '', error => {
			if (error) throw error;
		})
	} else {
		clearInterval(tid);
		ws.end();
	}
}, 200);

ws.on('finish', () => {
	console.log('完成');
});