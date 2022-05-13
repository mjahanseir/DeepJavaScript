
const courses=[
    {id:1 , name: 'a'},
    {id:2 , name: 'b'}
];

// console.log(courses.includes({id:1 , name:'a'}));

//Predicate or callback function
const course= courses
    .find(  function (course) {
        return course.name === 'a';
    });

console.log(course)


const course2= courses
    .find(  (course) =>{
        return course.name === 'xnm';
    });

console.log(course2)



const cou= courses.findIndex((cou)=> {
    return cou.name === 'a';
});

console.log(cou)

