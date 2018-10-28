setImmediate(() => {
	console.log('setImmediate');
});

setTimeout(() => {
	console.log('setTimeout');
}, 0);


process.nextTick(() => {
	console.log('nextTick');
});


/*
* nextTick()，setImmediate()都是事件执行后执行
*
* 执行速度：
* nextTick() > setTimeout() > setImmediate()
*
* 三个的区别：
* nextTick()：在这一事件队列的队尾
* setTimeout()：在这一事件队列与下一事件队列之间
* setImmediate()：在下一事件队列队首
*
* */