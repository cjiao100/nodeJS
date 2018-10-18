let pet = {
	words: '...',
	speak: function () {
		console.log(this.words)
	}
};

pet.speak();



function put(words){
	this.words = words;
	
	console.log(this.words);
	// console.log(this);
}

put('...');



function Pat(words) {
	this.words = words;
	this.speak = function () {
		console.log(this.words);
		// console.log(this);
	}
}

let cat = new Pat('买');
cat.speak();