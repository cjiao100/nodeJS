let  student = require('./student');
let teacher = require('./teacher');

function add(teacherName, students) {
	teacher.add(teacherName);
	
	
	
	students.forEach(function (item, index) {
		student.add(item);
	});
}

exports.add = add;  // 推荐使用

// module.exports = add;  // 真实存在的，如果这个已存在，那么exports将会失效