
let numbers=[1,2,3,4,5,6,7,8];
let another= numbers;

// numbers=[]

numbers.length=0

console.log(numbers);
console.log(another);

numbers.splice(0,numbers.length)
console.log(numbers);
console.log(another);

while (numbers.length)
    numbers.pop();
console.log(numbers);
console.log(another);
