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

function operate(operator, a, b) {
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
console.log(display)

let numbers = document.querySelectorAll(".number")
numbers = Array.from(numbers)
// console.log(numbers)
numbers.map(number => {
  number.addEventListener("click", () => {
    display.textContent += number.textContent
  })
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
  display.textContent = ""
})