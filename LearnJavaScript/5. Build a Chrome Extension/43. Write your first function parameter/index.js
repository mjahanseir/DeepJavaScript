const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(message,name) {
    welcomeEl.textContent = message +" "+ name
}

greetUser("Mo")