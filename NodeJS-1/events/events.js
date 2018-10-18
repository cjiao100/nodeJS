let EventEmitter = require('events').EventEmitter;

let life = new EventEmitter();

// 设置事件最多设置多少监听器 默认10个 超出会报错
life.setMaxListeners(1);

function blur(who) {
	console.log('不让你点了');
}

// 设置事件监听器
life.on('click',function (who) {
	console.log(who + '点击了');
});

life.on('blur', blur);

life.on('focus', function (who) {
	console.log((who + '获得焦点'));
});

// 移除事件监听
life.removeListener('blur', blur);
// 批量移除 不传具体事件名时移除全部事件
life.removeAllListeners();

// 查询事件监听器的数量 不传具体事件名时返回0
console.log(life.listeners('blur').length);

console.log(life.listenerCount('click'));
// 不推荐使用
console.log(EventEmitter.listenerCount(life, 'focus'));

// 触发事件
let hasClickListener =  life.emit('click', 'you');
let hasFouseListener =  life.emit('focus', 'you');
let hasBlurListener =  life.emit('blur', 'you');

/*console.log(hasClickListener);
console.log(hasFouseListener);*/

