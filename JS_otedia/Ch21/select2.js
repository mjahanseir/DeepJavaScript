// Select Elements - Part 2


let a = document.querySelector('#heading');
console.log(a);


let b = document.querySelector('.p1');
console.log(b);


let c = document.querySelectorAll('.p1');
console.log(c);
console.log(c.length);
console.log(Array.from(c));


console.log(document.body);
console.log(document.head);
console.log(document.images);
console.log(document.forms);


let d = document.body.querySelectorAll('.p1');
console.log(d);