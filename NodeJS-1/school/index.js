let klass = require('./class');

// klass.add('Soc', ['qwe', 'rty']);

function add(klasses) {
	klasses.forEach(function (item, index) {
		let teacherName = item.teacherName;
		let students = item.students;
		
		klass.add(teacherName, students)
	})
}

exports.add = add;