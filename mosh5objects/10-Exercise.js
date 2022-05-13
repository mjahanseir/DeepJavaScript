
const address=createAddress('a','b','c')


//Factory
function createAddress(street, city,zip){
    return {
        street,
        city,
        zip
    }
}
console.log(address)


//construction
function CreateAddress(street, city,zip){

        this.street=street,
        this.city=city;
        this.zip= zip;

}
const adr= new CreateAddress('aa','bb','cc')
console.log(adr)