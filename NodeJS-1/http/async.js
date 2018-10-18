/*异步同步*/

let  c = 0;

function print(c) {
	console.log(c);
}

function plus(callback) {
	setTimeout(function () {
		c += 1;
		callback(c);
	}, 1000)
}

plus(print);
// print(c);