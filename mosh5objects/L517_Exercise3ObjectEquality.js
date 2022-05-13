
//Constructor
function Address(street,city,zipcode){
    this.street=street;
    this.city= city;
    this.zipCode= zipcode;
}

let add1= new Address('a','b','c');
let add2= new Address('a','b','c');
let add3= add1

function areEqual(add1,add2){
    return add1.street===add2.street &&
        add1.city===add2.city &&
        add1.zipcode===add2.zipcode
}
function areSame(add1,add2){
    return add1===add2;
}

console.log(areEqual(add1, add2));
console.log(areSame(add1, add2));

console.log("_________________");

console.log(areEqual(add1, add3));
console.log(areSame(add1, add3));