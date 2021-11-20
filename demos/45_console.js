const x = 'x'
const y = 'y'

console.log(x, y)

// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象
console.log('我的%s已经%d岁', '猫', 2)


const a = 1
const b = 2
const c = 3
console.count(
  'x 的值为 ' + a + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + a + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + c + ' 且已经检查了几次？'
)

const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.trace()


const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

