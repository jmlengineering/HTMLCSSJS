const computerChoiceDisplay = document.getElementById('computer-choice')
const humanChoiceDisplay = document.getElementById('human-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let humanChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    humanChoiceDisplay.innerHTML = humanChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1) // 3
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === humanChoice) {
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && humanChoice === 'paper') {
        result = 'human wins!'
    }

    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        result = 'human has lost!'
    }

    if (computerChoice === 'paper' && humanChoice === 'rock') {
        result = 'human has lost!'
    }

    if (computerChoice === 'paper' && humanChoice === 'scissors') {
        result = 'human wins!'
    }
    
    if (computerChoice === 'scissors' && humanChoice === 'rock') {
        result = 'human wins!'
    }

    if (computerChoice === 'scissors' && humanChoice === 'paper') {
        result = 'human has lost!'
    }

    resultDisplay.innerHTML = result
}