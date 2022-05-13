// Value Type:
//     Number
//     String
//     Boolean
//     Symbol
//     undefined
//     null

// Reference Type:
//         Object
//         Function
//         Array

let x=10;
let y=x;
x=20;
console.log(x , y);
////////////////////
let xx ={ value:10};
let yy=xx;

xx.value=20;

console.log(xx , yy);

console.log("-----------------");

let number=10;
function increase(number){
    number++;
}
increase(number);
console.log(number);

let obj={value:10};
function increase2(obj){
    obj.value++;
}
increase2(obj);
console.log(obj);

