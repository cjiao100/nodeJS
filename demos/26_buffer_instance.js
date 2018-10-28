console.log('**************************length***************************');
const buf1 = Buffer.from('this is a test!');
console.log(buf1.length);


console.log('**************************toSting***************************');
const buf2 = Buffer.alloc(10);
for (let i = 1;i < 15; i++) {
	buf2[i] = i;
}
console.log(buf1.toString());


console.log('**************************fill***************************');
const buf3 = Buffer.alloc(10);
console.log(buf3.fill(10, 2, 6));


console.log('**************************equals***************************');
const buf4 = Buffer.from('ABC');
const buf5 = Buffer.from('414243', 'hex');
const buf6 = Buffer.from('ABCD');
console.log(buf4);
console.log(buf5);
console.log(buf6);
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));


console.log('**************************indexOf***************************');
console.log(buf4.indexOf('B'));
console.log(buf4.indexOf('D'));


console.log('**************************copy***************************');
