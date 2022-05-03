let message = "hello";
console.log(message);

let str0 = "It's a car";
console.log(str0);
str0 = 'My name is "Mike"';
console.log(str0);

str11 = 'My name is "Mike" and It\'s my car';
console.log(str11);

str11 =
  'Hello World!\nMy name is "Mike" and It\'s my car\nMy profile folder is : C:\\Users\\Mike';
console.log(str11);

// let name = "Mike",
//   age = 20;
// str12 = `My name is ${name}`;
// console.log(str12);
// str12 = `I'm ${age}, and my brother is two years older. So he is ${age + 2}`;
// console.log(str12);

st = `Hello World!
My name is ${name} and It's my car
My profile folder is : c:\\Users\\${name}`;
console.log(st);

console.log(" -----   String Methods & Properties  ------- ");

let str = "Hello World!";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.charAt(1));
console.log(str.charAt(6));
console.log(str[6]);

str = "Hello, welcome to JavaScript!";
console.log(str.indexOf("o"));
console.log(str.indexOf("to"));
console.log(str.indexOf("Java"));
console.log(str.indexOf("java"));

console.log(str.indexOf("o", 5));
console.log(str.indexOf("o", 13));

console.log('str.lastIndexOf("o") : ' + str.lastIndexOf("o"));
console.log('str.lastIndexOf("o", 10) : ' + str.lastIndexOf("o", 10));
console.log('str.lastIndexOf("css") : ' + str.lastIndexOf("css"));

console.log('str.includes("welcome") : ' + str.includes("welcome"));
console.log(str.includes("JavaScript"));
console.log(str.includes("javascript"));

console.log(`

****************************


String Methods & Properties

`);

let str1 = "Hello, welcome to JavaScript!";
console.log(str1.startsWith("welcome"));
console.log(str1.startsWith("Hello"));
console.log(str1.endsWith("JavaScript"));
console.log(str1.endsWith("!"));

console.log(str1.substring(3));
console.log(str1.substring(3, 10));

let str12 = "Javascript",
  str13 = "Hello";
console.log(str12.repeat(2));
console.log(str13.repeat(3));
console.log(str1.substring(2, 5).repeat(3));

console.log(str13.concat(" World!"));
console.log(str12.concat(" ", "is a ", "programming language"));
console.log(str12 + " is a " + "programming language");
console.log(str13 + " " + "Wo" + "rld!");

console.log("JavaScript".repeat(2));
console.log("Hello".concat(" World!"));
console.log("Hello World!".charAt(4));
console.log("Hello World!".length);
