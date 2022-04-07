let p = new Promise((res, rej)=>{
    let a= 1+1
    if(a==2){
        resolve("Success");
    }else{
        reject("Failed");
    }
})


p.then((message)=>{
    console.log("this is the then "+ message)
}).catch((message)=>{
    console.log("this is the catch "+ message)
});
