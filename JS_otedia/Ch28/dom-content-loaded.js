// DOMContentLoaded Event


function afterLoad(){
    const main = document.getElementById('main');

    main.addEventListener('click' , handler);
    
    function handler(event){
        main.innerHTML += 'Click ';
    }
}

document.addEventListener('DOMContentLoaded' , afterLoad)