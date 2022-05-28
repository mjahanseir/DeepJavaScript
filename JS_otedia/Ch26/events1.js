// Mouse Events - Part 1


const main = document.getElementById('main');
const button = document.querySelector('button');
const message = document.getElementById('message');


button.addEventListener('click' , () => {
	message.innerHTML += `<p>Click: ${Date.now()}</p>`;
});

// button.addEventListener('dblclick' , () => {
// 	message.innerHTML += `<p>Double Click: ${Date.now()}</p>`;
// });

button.addEventListener('mousedown' , () => {
	message.innerHTML += `<p>Mousedown: ${Date.now()}</p>`;
});

button.addEventListener('mouseup' , () => {
	message.innerHTML += `<p>Mouseup: ${Date.now()}</p>`;
});

button.addEventListener('contextmenu' , () => {
	message.innerHTML += `<p>Context Menu: ${Date.now()}</p>`;
});