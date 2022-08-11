let fName="mo";
let lName=null;
let age=30;
let address= undefined;

const mName="j"
console.log(fName);
console.log();
console.log(lName);
console.log(age);
console.log(typeof (lName));


console.log("****************************");
const pi=3.14;
console.log(pi);

console.log("****************************");

let person={
    name:"kil",
    age:30
}
console.log(person);
person.name="jil"
console.log(person);

person['age']=40;
console.log(person);

console.log("****************************");
console.log("      Arrays     ");

let selectedColor=['red','blue']
selectedColor[3]='yellow'
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor[3]);
console.log(selectedColor[4]);
console.log(selectedColor.length);


function greet(name, lname){
    console.log('Hello ' + name+ " " + lname);
}
greet("John", "Gorge");


function square(number){
    return number* number;
}
console.log(square(2));


