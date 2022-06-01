// Closures
function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}
const adder1 = makeAdder(5);
const adder2 = makeAdder(10);
console.log(adder1(2));
console.log(adder2(10));


// Change outside variables
function makeCounter(start){
	let i = start;
	return function() {
		return i++;
	}
}
const counter1 = makeCounter(1);
const counter2 = makeCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());