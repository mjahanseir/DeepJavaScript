
const numbers=[1,2,3,4,1];
const max=getMaxR(numbers);
console.log(max);


function getMax(array){
    if(array.length===0) return undefined;
    let max=array[0];
    for (let i of array)
        if (i>max)
           max=i;
    return max;
}
function getMaxR(array){
    if(array.length===0) return undefined;
    return array.reduce((accumulater, current)=>{
       if (current>accumulater) return current;
       return accumulater;

      // return (current>accumulator) ? current: accumulator;

      //  array.reduce (a>b) ? a: b;


    });
}