// navigator Object

const agent = document.getElementById('agent');
const details = document.getElementById('details');
const p = document.querySelector('p');


agent.addEventListener('click' , () => p.innerHTML = navigator.userAgent);

details.addEventListener('click' , function(){
    let str = `cookieEnabled: ${navigator.cookieEnabled} <br />
    language: ${navigator.language} <br />
    online: ${navigator.onLine} <br />
    platform: ${navigator.platform}`;
    
    p.innerHTML = str;
});