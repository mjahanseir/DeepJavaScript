
const person={
    name: "Mo",
    walk(){
        console.log(this);
    },
};

person.walk();


const walk= person.walk;
console.log(walk);


walk();