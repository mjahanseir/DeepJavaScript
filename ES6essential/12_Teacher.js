

///IMPORT
import{ Person } from "./12_Person";

////EXPORT
export class Teacher extends Person{
    constructor(name, degree) {
        super();
        this.degree=degree;
    }
    teach(){
        console.log("teach");
    }
}
