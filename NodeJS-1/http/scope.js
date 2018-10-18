let globalVariable = 'this is global variable';

function globalFunction() {
	let localVariable = 'this is local variable';
	
	console.log('Visit global/local variable');
	
	console.log(globalVariable);
	console.log(localVariable);
	
	globalVariable = 'this is changed variable';
	
	console.log(globalVariable);
	
	function localFunction() {
		let innerLocalVariable = 'this is inner local variable';
		
		console.log('Visit global/local/inner variable');
		
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}
	
	localFunction();
}

globalFunction();