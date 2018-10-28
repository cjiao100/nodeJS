const {parse, format} = require('path');

const filePath = 'C://user/1.html';

console.log(parse(filePath));
console.log(format({
	root: 'C:/',
	dir: 'D://domes',
	base: '1.html',
	ext: '.html',
	name: '20'
}));

/*
* format中
* dir的优先级高于root
* base的优先级高于ext,name
*
* 也就是说，当dir和root或者base和ext,name不匹配时会覆盖掉优先级低
* */