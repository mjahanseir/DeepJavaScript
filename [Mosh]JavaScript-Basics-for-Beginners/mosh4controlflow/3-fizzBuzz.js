const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

console.log("******************");
console.log(FB(3));
console.log(FB(5));
console.log(FB(15));
console.log(FB(7));
console.log(FB("Hello"));
function FB(num) {
  if (typeof num !== "number") return "Not a Number";
  if (num % 3 === 0 && num % 5 === 0) return "fizzBuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}
