
const person={
    name: "Mo",
    walk:function(){},
    talk(){}
};

person.talk();
person['name']= "John";

const targetMember='name';
person[targetMember.value]= "John";

