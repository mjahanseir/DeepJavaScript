let number = max(5, 3);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}

function maximume(i, j) {
  return i > j ? i : j;
}
console.log(maximume(3, 4));
console.log(maximume(3, 3));
console.log(maximume(-3, -4));
console.log(maximume(3, -4));
console.log(maximume(3, 0));
