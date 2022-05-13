

const numbers=[1,2,3,4];

console.log(includes(numbers,1));
console.log(includes(numbers,-1));

function includes(array,searchElement){
    for(let i of array)
        return i===searchElement;
}

