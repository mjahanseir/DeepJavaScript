

const numbers=[1,2,3,4,1];
const count=countOccurences2(numbers,1);
console.log(count);


function countOccurences(array,searchElement){
    let num=0;
    for (let i of array)
        if (i===searchElement)
            num++;
    return num;
}
function countOccurences2(array,searchElement){

    return array.reduce((acc,curr)=>{
        const occurence=(curr===searchElement)?1:0;
                console.log(acc, curr,searchElement)
        return acc+occurence
    },0);
}

