
function Circle(radius){
    this.radius=radius;
    this.draw= function () {
        console.log('draw');
        }
}

// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);

const circle1= new Function('radius',   `
 this.radius=radius;
    this.draw= function () {
        console.log('draw');
        }
`);

const circle= new Circle(1);


const another= new Circle(1);



Circle.call({},1); // ==>   const another= new Circle(1);
Circle.apply({},[1,2,3]);

