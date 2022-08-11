
//Factory Function
function createCircle(radius){
    return {                 // =  const circle={
        radius,               // = radius:radius,
        draw() {            // draw: function (){
            console.log('draw');
        }
    };
}

const circle1= createCircle(1);

//Constructor Function
function Circle(radius){

    this.radius=radius;
    this.draw= function () {
        console.log('draw');
        }
}

const another= createCircle(1);

another.constructor;
circle.constructor;


let x={}  // =let x = new Object();

//new String();
