
class Person{
    constructor(name) {
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}

const person= new Person('Mo');
console.log(person.name);
person.walk()

