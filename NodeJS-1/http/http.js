let http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello Word');
	res.end();
}).listen(2015);

/**
 * createServer() 	创建服务器
 * listen()			设置监听端口号
 */
 