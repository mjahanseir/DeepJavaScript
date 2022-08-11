

const numbers=[1,2,3,4];
const out=move(numbers,0,1);
console.log(out);


function move(array,index,offset){
    const position = index+offset;
    if(position>=array.length || position<0){
        console.error("invalid");
        return ;
    }
    const output= [...numbers];
    const element=output.splice(index,1)[0];
    output.splice(position, 0,element);
    return output;
}

