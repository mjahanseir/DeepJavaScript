let message = "hello";
console.log(message);

let str = "It's a car";
console.log(str);
str = 'My name is "Mike"';
console.log(str);

str = 'My name is "Mike" and It\'s my car';
console.log(str);

str =
  'Hello World!\nMy name is "Mike" and It\'s my car\nMy profile folder is : C:\\Users\\Mike';
console.log(str);

let name = "Mike",
  age = 20;
str = `My name is ${name}`;
console.log(str);
str = `I'm ${age}, and my brother is two years older. So he is ${age + 2}`;
console.log(str);

str = `Hello World!
My name is ${name} and It's my car
My profile folder is : c:\\Users\\${name}`;
console.log(str);

console.log(" -----   String Methods & Properties  ------- ");

let st = "Hello World!";
console.log(st.length);

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

console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o", 10));
console.log(str.lastIndexOf("css"));

console.log(str.includes("welcome"));
console.log(str.includes("JavaScript"));
console.log(str.includes("javascript"));
