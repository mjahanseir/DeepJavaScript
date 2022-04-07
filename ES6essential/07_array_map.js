
const colors=['red','green','blue'];

const items1 = colors.map(function(color){
    return '<li>' + color + '</li>'
})
console.log(items1);

const items= colors.map ( color =>  `<li> ${color}</li>`);

console.log(items);

