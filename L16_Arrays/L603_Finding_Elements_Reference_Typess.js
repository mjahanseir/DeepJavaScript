
const courses=[
    {id:1 , name: 'a'},
    {id:2 , name: 'b'}
];

// console.log(courses.includes({id:1 , name:'a'}));

const course= courses.find((course)=> {
    return course.name === 'xyz';
});

console.log(course)


const cou= courses.findIndex((cou)=> {
    return cou.name === 'a';
});

console.log(cou)

