let numbers=[5,9,15,23,19]
console.log(numbers.sort());
function compare(value1, value2){
    return value1-value2;
}

console.log(numbers.sort(compare))

console.log(numbers.sort ((val1, val2) => val1-val2));
console.log("*********************");

function show(val){
console.log(val);
}
let color=["red", "blue","yellow"]
color.forEach(show);
color.forEach(value => console.log(value));

color.forEach((value , index)=> console.log(value + index));

console.log("*********************");

function show(val){
console.log(val);
}
let col=["green",11,23,5,12,24, "blue"]
console.log(col.filter(value => value%2===0))
console.log(col)

