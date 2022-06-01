// Immediately Invoked Function Expression (IIFE)
(function(){
	console.log("This is an IIFE");
})();


// Send args to IIFEs
(function(n){
	let result = 1;
	for(let i=1;i<=n;i++){
		result *= i;
	}
	console.log(result);
})(4);


// Seperate variables scope
(function(){
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
})();


// Use strict mode
(function(n){
	"use strict"
	let result = 1;
	for(let i=1;i<=n;i++){
		result *= i;
	}
	console.log(result);
})(5);