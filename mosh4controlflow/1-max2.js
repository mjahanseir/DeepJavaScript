function max(x,y){
   return  x>y? x:y;
}
console.log(max(2,3));



function landscape(width,height){
   return width>height;
}
console.log(landscape(2,3));


function fizbuzz(x){
   if(typeof x!=='number')
      return 'not a number'
   if(x%3===0 && x%5===0)
      return 'fizbuzz';
   if(x%3===0 )
      return 'fizb';
   if(x%5===0)
      return 'buzz';
   return x
}
console.log(fizbuzz(15));
console.log(fizbuzz(3));
console.log(fizbuzz(5));
console.log(fizbuzz(7));
console.log(fizbuzz("a"));
console.log( "  ------------------     ");

function showNumbers(x){

   for(let i=0; i<x; i++){
      if(i%2!==0)
         console.log(i + '  "Even"')
      else
         console.log(i + '  "Odd"')
   }
}
showNumbers(10)

console.log( "  ------------------     ");

const array=[0,NaN,'mo',1,2,3]
console.log(canTruthy(array))
function canTruthy(array){
   let count=0;
   for(let i of array)
      if(i)
         count++;
   return count;
}

console.log( "  ------------------     ");
const movie= {
   title:'a',
   releaseYear:2018,
   rating:4.5,
   director:'b'
};
showProp(movie)
function showProp(obj) {
   for(let i in obj)
      if(typeof obj[i]==='string')
         console.log(i, obj[i])
}
console.log( "  ------------------     ");
console.log(sum(10))
function sum(limit){
   let sum=0;
   for(let i=1; i<=limit; i++)
      if(i%3===0 || i%5===0  )
         sum+=i;
   return sum;
}
console.log( "  ------------------     ");
const marks=[80,80,50];
console.log(calcs(marks))
function calcs(m){

   let sum=0;
   let average=0
   for(let i of m)
      sum+=i;
   average= sum/m.length;
   if(average>=90)
      return 'a'
   if(average>=80)
      return 'b'
   if(average>=70)
      return 'c'
   if(average>=60)
      return 'd'
   return 'f'
}
console.log( "  ------------------     ");

stars(10);
function stars(m){
   for(let i=1; i<m; i++){
      let p='';
      for(let j=0; j<i;j++)
         p+='*';
      console.log(p)
   }
}
console.log( "  ------------------     ");

primmm(10);

function primmm(x){
   for(let i=2; i<=x; i++){

      let prm=true;
      for(let j=2; j<=i; j++) {
         if (i % j === 0) {
            prm = false;
            break;
         }
      }
      if(prm)
         console.log(i);
   }
}
