
const first= [1,2,3]
const second= [4,5,6]

const combined= first.concat(second)
console.log(combined);

////////////////////////////////

const combined2= [...first, ...second];
console.log(combined2);

const combined3= ['c' ,...first,'a', ...second ,'b'];
console.log(combined3);


const clone=[...first];
console.log(first);
console.log(clone);


const fir={name: 'mo'};
const sec={job: 'it'};
const comb= { ...fir , ...sec , location:"ca"}
console.log(comb);


const clonee= {...fir}
console.log(clonee);
