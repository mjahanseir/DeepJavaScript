

const numbers=[1,2,3,4];
const out=except(numbers,[1]);
console.log(out);
console.log(except(numbers,[1,2]));
console.log(except(numbers,[1,2,3]));

function except(array,exclude){
    const out= [];
    for(let i of array)
        if (!exclude.includes(i))
           out.push(i);
        return out;
}

