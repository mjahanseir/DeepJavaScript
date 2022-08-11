
//string primitive
const message= 'This is my first message';

//string object
const another= new String('hi');

console.log(typeof(message));
console.log(typeof(another));

console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith("this"));
console.log(message.endsWith("this"));
console.log(message.indexOf('my'));

message.replace('first', 'second');
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());
console.log(message.trimLeft());
console.log(message.trimRight());
console.log(message.split(' '));


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String