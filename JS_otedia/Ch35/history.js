// history Object

const back = document.getElementById('back');
const forward = document.getElementById('forward');
const go = document.getElementById('go');
const length = document.getElementById('length');

back.addEventListener('click' , () => history.back());

forward.addEventListener('click' , () => history.forward());

go.addEventListener('click' , () => history.go(2));

length.addEventListener('click' , () => alert(history.length));