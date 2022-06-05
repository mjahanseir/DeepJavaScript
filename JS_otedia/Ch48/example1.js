// JSON.stringify Method
const book = {
	title: 'JavaScript Everywhere',
	author: {
		firstname: 'Adam',
		lastname: 'Scott'
	},
	 year: 2020,
	 other: undefined,
     showTitle(){
          alert(this.title);
	 }	 
}

console.log(JSON.stringify(book));
console.log(JSON.stringify(book , ['title' , 'year']));
console.log(JSON.stringify(book , ['title' , 'year'] , 4));
console.log(JSON.stringify(book , null , 4));
console.log(JSON.stringify(book , null , '* * * '));

function replacer(key, value) {
	if (typeof value === 'number') {
		return undefined;
     }
	return value;
}
console.log(JSON.stringify(book , replacer , 4));