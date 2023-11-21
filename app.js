var scoreElement = document.querySelector("#Score-card")
var rockElement = document.querySelector(".item1")
var paperElement = document.querySelector(".item2")
var scissorElement = document.querySelector(".item3")
var playAgainButtonElement = document.querySelector("#play-again")
var itemElement = document.querySelector("#item")
var lastTextElement = document.querySelector(".lastText")
var playAgainButton = document.querySelector(".button")

let rockImage = "./assets/rock-hand.png"
let paperImage = "./assets/paper-hand.png"
let scissor = "./assets/scissors-hand.png"

var userDisplay = document.querySelector(".userGame")
var compDisplay = document.querySelector(".compGame")

var userChoice = ""
var compChoice = "";
var userScore = 0
var compScore = 0

function click() {
    rockElement.onclick = () => {
        userDisplay.innerHTML = `<img src="${rockImage}" height='200px'> `
        userChoice = "rock"
        compGame()
    }

    paperElement.onclick = () => {
        userDisplay.innerHTML = `<img src="${paperImage}" height='200px'> `
        userChoice = "paper"
        compGame()
    }

    scissorElement.onclick = () => {
        userDisplay.innerHTML = `<img src="${scissor}" height='200px'> `
        userChoice = "scissor"
        compGame()
    }
}

click()

function compGame() {
    let random = Math.floor(Math.random() * 3) + 1
    if (random === 1) {
        compDisplay.innerHTML = `<img src="${rockImage}" height='200px'> `
        compChoice = "rock"
    } else if (random === 2) {
        compDisplay.innerHTML = `<img src="${paperImage}" height='200px'>`
        compChoice = "paper"
    } else if (random === 3) {
        compDisplay.innerHTML = `<img src="${scissor}" height='200px'>`
        compChoice = "scissor"
    }
    updateScore()
    finishGame()
}

function updateScore() {
    if (userChoice == compChoice) {
        compScore = compScore
    } else if (userChoice == "scissor" && compChoice == "rock") {
        compScore++;
    } else if (userChoice == "paper" && compChoice == "scissor") {
        compScore++;
    } else if (userChoice == "rock" && compChoice == "paper") {
        compScore++;
    } else {
        userScore++;
    }
    scoreElement.innerHTML = `Score:${userScore} - ${compScore}`;
}

function finishGame() {
    if (userScore >= 5 || compScore >= 5) {
        playAgainButtonElement.style.visibility = "visible"
        itemElement.style.visibility = "hidden"
    }
    if (userScore === 5) {
        lastTextElement.innerHTML = "You won the game"
    } else {
        lastTextElement.innerHTML = "You lost the game"
    }
}

playAgainButton.onclick = () =>{
    window.location.reload()
}