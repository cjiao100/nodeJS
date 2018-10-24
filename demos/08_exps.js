// (function (exports, require, module, _filename, _dirname) {
// 	// code
// });

exports.text = 100;

/*
// 错误写法

exports = {
	a: 1,
	b: 2,
	text: 10
};
*/

// 正确写法，但是这样写会使其他直接通过exports.xx添加的值失效
/*module.exports = {
	a: 1,
	b: 2,
	test: 10
};*/

// 或者这样添加也是可以的
let txt = {
	a: 1,
	b: 2,
	test: 10
};
exports.txt = txt;


/*
* 默认情况下，exports = module.exports
* exports默认指向module.exports，使用exports等同与调用module.exports
*
* 可以修改exports的值或添加值，但不能修改exports的指向
* */