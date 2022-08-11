let person = {
  name: "mo",
  age: 20,
};

console.log("---------------------");

for (let i in person) {
  console.log(i);
}

console.log("---------------------");

for (let i in person) {
  console.log(i, person[i]);
}

console.log("---------------------");

const color1 = ["red", "green", "blue"];
for (let i in color1) {
  console.log(i);
}
console.log("---------------------");

const color = ["red", "green", "blue"];
for (let i in color) {
  console.log(i, color[i]);
}
