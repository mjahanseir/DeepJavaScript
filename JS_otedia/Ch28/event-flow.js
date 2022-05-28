// Event Flow


const main = document.getElementById('main');


main.addEventListener('click' , divHandler);
document.body.addEventListener('click' , bodyHandler);


function divHandler(event){
    main.innerHTML += 'I`m divHandler<br />';
    
}


function bodyHandler(event){
    main.innerHTML += 'I`m bodyHandler<br />';
    event.stopPropagation();
}