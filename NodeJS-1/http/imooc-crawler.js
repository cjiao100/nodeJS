let http = require('http');
let url = 'http://www.imooc.com/learn/348';

http.get(url, function (res) {
	let html = '';
	
	res.on('data', function (data) {
		html += data;
	});
	
	res.on('end', function () {
		console.log(html);
	});
}).on('error', function () {
	console.log('获取课程出错');
});