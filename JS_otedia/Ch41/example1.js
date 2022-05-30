// length property
function square(x) {
    return x ** 2;
}
console.log(square.length);

// call method
function sayHello() {
    return `Hello, my name is ${this.name}`;
}
console.log(sayHello());

const user1 = { name: "Amir" };
const user2 = { name: "Mohammad" };

console.log(sayHello.call(user1));
console.log(sayHello.call(user2));

function sayHello2(greeting) {
    return `${greeting}, my name is ${this.name}`;
}
console.log(sayHello2.call(user1, "Hi"));
console.log(sayHello2.call(user2, "Hello"));

// apply method
console.log(sayHello2.apply(user1, ["How do you do"]));

// bind method
x = 5;
const obj = {
    x: 10,
    myMethod: function () {
        console.log(this.x);
    },
};

obj.myMethod();

const myFunction = obj.myMethod;
myFunction();

const boundFunction = myFunction.bind(obj);
boundFunction();

// args in bind method
function sumArgs(num1 , num2 , num3){
	return num1 + num2 + num3;
}
console.log(sumArgs(1 , 2 , 3));
const sum = sumArgs.bind(null , 10 , 20);
console.log(sum(30));

// 'this' in Arrow functions
const obj2 = {
    x: 20,
    myMethod: function(){
        const a = () => console.log(this.x);
        a();
    }
};
obj2.myMethod();