console.log("hi");

let num = 10;
console.log(num);

// const product = ["book", 99, true];
// const [name, ...other] = product;

// console.log(title);
// console.log(other);

const product1 = ["book", 99, true];

const p2 = {
  ttl: "Book",
  price: 99,
  exist: true,
};
console.log(p2.ttl);

const { ttl } = p2;
console.log(ttl);

console.log("***************");

const pro = [
  { id: 1, title: "Book1", price: 99, exist: true },
  { id: 1, title: "Book2", price: 88, exist: false },
  { id: 1, title: "Book3", price: 77, exist: true },
];

const data = JSON.stringify(pro);
console.log(pro);
console.log(data);

console.log("++++++++++++");

const resp = JSON.parse(data);
console.log(resp);

console.log("++++++loooppppp++++++");

for (let i = 0; i < 10; i++) {
  console.log("i : ", i);
}

for (let item = 0; item < pro.length; item++) {
  console.log("title : ", pro[item].title);
}
