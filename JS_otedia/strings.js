console.log(typeof 20);
console.log(typeof 8.5);

let a = Number.isInteger;
console.log(a);

console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(1 / 1));
console.log(Number.isNaN(1 / 0));
console.log(Number.isNaN(NaN));

let b = 30000;
console.log(b);
console.log(b.toExponential());

let c = 23.28;
console.log(c.toFixed(1));

let d = 23.286756756567567;
console.log(d.toPrecision(6));

console.log((23.6585875865865).toPrecision(9));
