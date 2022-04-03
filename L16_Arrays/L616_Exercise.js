

const numbers=arrayFormatRange(-10 , -4);

console.log(numbers);
console.log(arrayFormatRange(1 , 3));
console.log(arrayFormatRange(0 , -4));

function arrayFormatRange(min,max){
    const out=[];
    for(let i = min ; i<= max; i++)
        out.push(i);
    return out;
}

