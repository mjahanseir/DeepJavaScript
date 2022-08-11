let x=10;
let y=10;

console.log(x+y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

console.log(x++);
console.log(x++);

console.log(x--);
console.log(--x);

console.log("Assignment Operator");

x+=5;
console.log(x);
x-=8;


console.log(x>0);
console.log(x<=1);

console.log(x===1);
console.log(x!==1);



console.log(1===1);
console.log(1==1);

console.log(' stric = ' + (1==='1'));
console.log(1=='1');
console.log(true=='1');

let point=110;
let type= point>100 ? 'Gold': 'Silver';
console.log(type);


console.log("Logical Operators with Non booleans");

console.log(true && true);
console.log(true && false);
console.log(false && false);


console.log("Logical Operators with Non Booleans");
console.log(false ||true);
console.log(false ||"Mo");
console.log(false|| 1);
console.log(false|| 1||2);

let user=undefined;
let def= 'blue';
let current= user|| def;
console.log(current);


