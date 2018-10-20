let http = require('http');
let fs = require('fs');
let request = require('request');

http.createServer((req, res) => {
	/*fs.readFile('../buffer/logo.png', (err, data) => {
		if (err) {
			res.end('file not exist!');
		} else {
			res.writeHead(200, {'Context-Type': 'text/html'});
			res.end(data);
		}
	})*/
	
	// fs.createReadStream('../buffer/logo.png').pipe(res);
	
	request('https://www.imooc.com/static/img/index/logo.png').pipe(res)
}).listen(8080);