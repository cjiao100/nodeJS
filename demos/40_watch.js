const fs = require('fs');

fs.watch('./', {
	recursive:true
}, (event, filename) => {
	console.log(event);
	console.log(filename);
})