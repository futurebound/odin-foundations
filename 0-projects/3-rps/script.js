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
  let outcome = 0
  let message = "It's a tie!"
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        message = "You Win! Rock beats Scissors"
        outcome = 1
      } else {
        message = "You Lose! Paper beats Rock"
        outcome = -1
      }

    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        message = "You Win! Paper beats Rock"
        outcome = 1
      } else {
        message = "You Lose! Scissors beats Paper"
        outcome = -1
      }

    } else { // playerSelection = "scissors"
      if (computerSelection === "paper") {
        message = "You Win! Scissors beats Paper"
        outcome = 1
      } else {
        message = "You Lose! Rock beats Scissors"
        outcome = -1
      }
    }
  }

  console.log(message)
  return outcome
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

  // report outcome
  if (difference < 0) {
    console.log("You lost the game!")
  } else if (difference === 0) {
    console.log("It's a tie game!")
  } else {
    console.log("You won the game!")
  }
}


/*
function testPlayRound() {
  const p1 = "ROCK"
  console.log(playRound(p1, "Rock"))
  console.log(playRound(p1, "Paper"))
  console.log(playRound(p1, "Scissors"))
  
  const p2 = "pApER"
  console.log(playRound(p2, "Rock"))
  console.log(playRound(p2, "Paper"))
  console.log(playRound(p2, "Scissors"))
  
  const p3 = "sciSSORs"
  console.log(playRound(p3, "Rock"))
  console.log(playRound(p3, "Paper"))
  console.log(playRound(p3, "Scissors"))
}
*/

playGame()