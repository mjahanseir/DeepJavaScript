
class Person{
    constructor(name) {
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
class Teacher extends Person{
    constructor(name, degree) {
        super();
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}

const person= new Person('Mo');
const teacher= new Teacher('JJ', "master");
teacher.degree="phd"
console.log(person.name);
teacher.walk()
console.log(teacher);
person.walk()

