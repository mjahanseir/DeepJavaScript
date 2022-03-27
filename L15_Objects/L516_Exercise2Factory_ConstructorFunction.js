

//Factory
function createAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    };
}

let address= createAddress('a,','b','c');

console.log(address);



//Constructor

function Address(street,city,zipcode){
        this.street=street;
        this.city= city;
        this.zipCode= zipcode;
}

let add= new Address('a','b','c');

console.log(add);