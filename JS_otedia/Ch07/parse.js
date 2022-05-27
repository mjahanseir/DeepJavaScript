// parseInt & parseFloat Functions


console.log(parseInt('1234blue'));
console.log(parseInt('   '));
console.log(parseInt('-22.55'));

console.log(parseInt('1010101' , 2));
console.log(parseInt('abc112' , 16));
console.log(parseInt('abc112' , 36));
console.log(parseInt('zzzz' , 36));

console.log(parseFloat('1234blue'));
console.log(parseFloat('0xA'));
console.log(parseFloat('0b111'));
console.log(parseFloat('22.5'));
console.log(parseFloat('22.34.5'));
console.log(parseFloat('0908.5'));
console.log(parseFloat('3.125e7'));