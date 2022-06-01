// Nested Functions
function outer(){
	let outside = 'Outside';
	function inner(){
		let inside = 'Inside';
		console.log(inside);
		console.log(outside);
	}
	console.log(outside);
	inner();
}
outer();

// inner();		// Error

function outer(){
	let outside = 'Outside';
	function inner(){
		let inside = 'Inside';
		console.log(inside);
		console.log(outside);
	}
	return inner;
}
let myFunc = outer();
myFunc();