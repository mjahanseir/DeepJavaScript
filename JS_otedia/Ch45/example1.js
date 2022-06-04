// Iterators & Generators
function* myGenerator(){
	yield 1;
	yield 2;
}

let it = myGenerator();
console.log(it.next());
console.log(it.next());
console.log(it.next());


const obj = {
	*generator () {
		yield 'a';
		yield 'b';
	}
}

it	= obj.generator();
console.log(it.next())
console.log(it.next())
console.log(it.next())