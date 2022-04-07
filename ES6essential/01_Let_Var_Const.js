
//VAR => FUNCTION
//LET => BLOCK
//CONST => BLOCK

function sayHelloVar(){
    for(var i=0 ; i<5;i++) {
        console.log(i);
    }
    console.log(i);
}
sayHelloVar();

function sayHelloLet(){
    for(let i=0 ; i<5;i++) {
        console.log(i);
    }
    // console.log(i);
}

const b=1;
x=2;
