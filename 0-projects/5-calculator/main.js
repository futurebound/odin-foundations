"use strict"

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function modulo(a, b) {
  return a % b
}

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b)
  } else if (operator === "-") {
    return subtract(a, b)
  } else if (operator === "*") {
    return multiply(a, b)
  } else if (operator === "/") {
    return divide(a, b)
  } else if (operator === "%") {
    return modulo(a, b)
  }

  return "ERROR - unknown operation"
}

const display = document.querySelector(".display-text")
// console.log(display)

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
  number.addEventListener("click", () => {
    display.textContent += number.textContent
  })
})

const operators = document.querySelectorAll(".operator")
operators.forEach(operator => {
  operator.addEventListener("click", () => {
    display.textContent += ` ${operator.textContent} `
  })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
  display.textContent = ""
})

const submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
  let input = display.textContent
  input = input.split(" ")
  // console.log(`before: ${input}`)
  // console.log(`isNaN: ${isNaN(parseInt(input[2]))}`)
  if (input.length < 3 || isNaN(parseInt(input[2]))) {
    alert("please enter a valid equation to evaluate")

  } else {
    // spaces only occur with operators, so loop until input array only a single
    //  element / number remaining
    // e.g. ["12", "+", "3"] => ["15"]
    while (input.length > 1) {
      const a = parseInt(input[0])
      const b = parseInt(input[2])
      const operator = input[1]
      const result = operate(a, b, operator)
  
      input[2] = result
      input = input.slice(2)
  
      // console.log(`during: ${input}`)
    }
  
    // console.log(`after: ${input}`)
  
    display.textContent = input

  }
})