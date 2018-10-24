// 引用模块
const mod = require('./02_cusmod');

console.log(mod.testVar);
console.log(mod.testFn());

/*
* 最后的undefined是因为testFn()没有设置
* 返回值
* */
