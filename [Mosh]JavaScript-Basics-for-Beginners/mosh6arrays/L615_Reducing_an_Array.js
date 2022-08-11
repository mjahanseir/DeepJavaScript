
const numbers=[1,-1,2,3];
let sum=0;
// for(let n of numbers)
//     sum+=n;


// const sum2=numbers.reduce((acc,curr)=>{
//     return acc+curr;
// }, 0)
//

const sum2=numbers.reduce(
             (acc,curr)=> acc+curr
    );
console.log(sum2);



