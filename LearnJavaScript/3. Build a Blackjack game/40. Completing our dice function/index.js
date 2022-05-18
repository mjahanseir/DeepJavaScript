// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = rolDice()

console.log(randomNumber)

function rolDice(){
    return Math.floor( Math.random() * 6 ) +1
}