"use strict"

// randomly return rock paper or scissors
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3)
  if (choice === 0) {
    return "Rock"
  } else if (choice === 1) {
    return "Paper"
  } else {
    return "Scissors"
  }
}

// plays a single round of RPS between player & computer
function playRound(playerSelection, computerSelection) {
  // get user selection
  // get computer selection
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  // compare selection to see if win (1) / lose (-1) / tie (0)
    // paper > rock, rock > scissor, scissor > paper
  let result = 0
  let message = "It's a tie!"
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        message = "You Win! Rock beats Scissors"
        result = 1
      } else {
        message = "You Lose! Paper beats Rock"
        result = -1
      }

    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        message = "You Win! Paper beats Rock"
        result = 1
      } else {
        message = "You Lose! Scissors beats Paper"
        result = -1
      }

    } else { // playerSelection = "scissors"
      if (computerSelection === "paper") {
        message = "You Win! Scissors beats Paper"
        result = 1
      } else {
        message = "You Lose! Rock beats Scissors"
        result = -1
      }
    }
  }

  const resultsDiv = document.querySelector("#results")
  resultsDiv.textContent = message

  const playerScore = document.querySelector("#player-score")
  const oldPlayerScore = parseInt(playerScore.textContent)
  playerScore.textContent = result + parseInt(oldPlayerScore)

  const computerScore = document.querySelector("#computer-score")
  const oldComputerScore = parseInt(computerScore.textContent)
  computerScore.textContent = (result * -1) + oldComputerScore

  return result
}

// plays an entire 5 round game
function playGame() {
  let difference = 0
  for (let i = 0; i < 5; i++) {
    const userGuess = prompt("Enter Rock, Paper, or Scissors")
    const computerGuess = getComputerChoice()
    difference += playRound(userGuess, computerGuess)
    console.log(`round ${i}: difference = ${difference}`)
  }

  // report result
  if (difference < 0) {
    console.log("You lost the game!")
  } else if (difference === 0) {
    console.log("It's a tie game!")
  } else {
    console.log("You won the game!")
  }
}

const rockButton = document.querySelector(".rock")
rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice())
  checkGameOver()
})

const paperButton = document.querySelector(".paper")
paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice())
  checkGameOver()
})

const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice())
  checkGameOver()
})

function checkGameOver() {
  const playerScore = document.querySelector("#player-score")
  const computerScore = document.querySelector("#computer-score")

  if (parseInt(playerScore.textContent) >= 5) {
    alert("Congrats! You won the game!")
  } else if (parseInt(computerScore.textContent) >= 5) {
    alert("Ooh! Too bad you lose!")
  }
  
}