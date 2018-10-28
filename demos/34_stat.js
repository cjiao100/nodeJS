const fs = require('fs');

fs.stat('./34_stat.js', (err, stats) => {
	if (err) throw err;
	
	console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory());
});