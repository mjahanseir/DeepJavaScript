
const address={
    street:'a', city:'b', zip:'c'
};

function showAddress(address){
    for(let i in address)
        console.log(i,address[i])
}

showAddress(address)