console.log("this is a module");

const  testVar = 100;

function test() {
	console.log(testVar);
	
	// return 1;
}

// 模块对外接口
module.exports.testVar = testVar;
module.exports.testFn = test;