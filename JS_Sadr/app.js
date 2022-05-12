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

const price = 99;
const newPrice = 109;
if (price > newPrice) {
  console.log("Discont Added");
} else if (newPrice < price) {
  console.log(`price : ${newPrice}`);
} else console.log("same price");

console.log("_________Functions in JS_________");

const addProduct = (name, price) => `Title ${name} , Price: ${price}`;

const re = addProduct("Book4", 99);

console.log(re);

console.log("_________Arrays Methods_________");

pro.forEach((item) => {
  console.log(item.title);
});

console.log("_________Map Methods_________");

const proTit = pro.map((item) => {
  return item.title;
});

console.log(proTit);

console.log("_________Filter Methods_________");

const proExist = pro.filter((item) => {
  return item.exist === true;
});

console.log(proExist);

console.log("_________OOP_________");
function Prod(title, price) {
  this.title = title;
  this.price = price;

  this.prodInfo = function () {
    return `Title: ${this.title}  -  Price: ${this.price}`;
  };
}

const prod1 = new Prod("paper", 99);
const prod2 = new Prod("pen", 82);

console.log(prod1.prodInfo());
console.log(prod2.prodInfo());

class Prods {
  constructor(nm, prc) {
    this.nm = nm;
    this.prc = prc;
  }

  prodInfo() {
    return `Title: ${this.title}  -  Price: ${this.price}`;
  }
}

const prods1 = new Prod("paper", 99);
const prods2 = new Prod("pen", 82);

console.log(prods1.prodInfo());
console.log(prods2.prodInfo());
