function Pet(words) {
	this.words = words;
	this.speak = function () {
		console.log(this.words);
	}
}

function Dog(words) {
	Pet.call(this, words);
	// Pet.apply(this, arguments);  // 和上边相同
}

let dog = new Dog('...');

dog.speak();