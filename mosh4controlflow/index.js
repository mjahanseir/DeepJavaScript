let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

for (let i = 0; i < 10; i++)
  if (i % 2 !== 0) console.log("value of i if it is odd = ", i);

console.log("--------------------------------");

let j = 0;
while (j < 10) {
  if (j % 2 !== 0) console.log("value of j if it is odd = ", j);
  j++;
}

console.log("--------------------------------");
let k = 0;
do {
  if (k % 2 !== 0) console.log("value of k if it is odd = ", k);
  k++;
} while (k < 10);
console.log("--------------------------------");
