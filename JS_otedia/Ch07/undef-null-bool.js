// Undefined , Null & Boolean Conversion

console.log(parseInt(undefined));
console.log(Number(undefined));
console.log(3 * undefined);
console.log(undefined + 3);
console.log(undefined + '3');
console.log(String(undefined) + 3);


console.log(Number(null));
console.log(parseInt(null));
console.log(null + 10);
console.log(null + '10');

console.log(true + 10);
console.log(false + 10);
console.log(true + '10');
console.log(false + '10');

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));

console.log(Boolean('0'));
console.log(Boolean('AAA'));
console.log(Boolean(22.5));
