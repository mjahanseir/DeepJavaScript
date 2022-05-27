// Variable & Function Hoisting


function example1(){
    console.log(a);
    var a = 40;
}

example1();


example2();

function example2(){
	console.log("example2");
}



// example3();

let example3 = function(){
	console.log("example3");
}

example3();