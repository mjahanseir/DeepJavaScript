// Define Event Listeners


let button = document.querySelector('button');
button.addEventListener('click' , handler);

function handler(){
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.textContent = 'Button Clicked!';
    main.appendChild(p);
}

// function handler(){
//     let main = document.getElementById('main');
//     main.innerHTML += '<p>Button Clicked!</p>';
// }

// button.onclick = function(){
// 	console.log(Date.now());
// }

// button.onclick = function(){
// 	console.log(Math.random());
// }

button.addEventListener('click' , 
        () => console.log(Date.now()));