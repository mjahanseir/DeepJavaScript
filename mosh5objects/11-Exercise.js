
const address1=new Address('a','b','c')
const address2=new Address('a','b','c')


function Address(street, city,zip){
    this.street=street;
    this.city=city;
    this.zip= zip;
}

function areEqual(address1, address2){
    let isEqual=false;
    for(let add1 in address1)
        for(let add2 in address2)
            if (address1[add1]===address2[add2])
                isEqual=true;

    return isEqual;

}
function areSame(address1, address2){
    return address1===address2;
}

const address3= address1
console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))
console.log(areSame(address1, address3))