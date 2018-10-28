const fs = require('fs');

const content = Buffer.from('this is a text');

fs.writeFile('./text', content, err => {
	if (err) throw err;
	
	console.log('ok');
});