// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl= document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name ="Mo"
let  greeting = "Welcom to this page  "+ name;
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText= greeting;