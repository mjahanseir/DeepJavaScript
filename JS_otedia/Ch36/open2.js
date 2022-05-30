// Open New Windows - Part 2


const google = document.getElementById('google');
const blank = document.getElementById('blank');
const self = document.getElementById('self');

google.addEventListener('click' , function(){
    open('https://www.google.com' , 'google');
});

blank.addEventListener('click' , function(){
    open('https://www.google.com' , '_blank');
});

self.addEventListener('click' , function(){
    open('https://www.google.com' , '_self');
});