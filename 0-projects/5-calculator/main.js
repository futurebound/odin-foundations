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

const dot = document.querySelector(".dot")
dot.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += "."
  }
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
  display.textContent = ""
})

const backspace = document.querySelector(".backspace")
backspace.addEventListener("click", () => {
  const length = display.textContent.length
  display.textContent = display.textContent.substring(0, length - 1)
})

const submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
  const original = display.textContent
  let input = original.split(" ")
  if (input.length < 3 || isNaN(parseInt(input[input.length - 1]))) {
    alert("please enter a valid equation to evaluate")

  } else {
    // spaces only occur with operators, so loop until input array only a single
    //  element / number remaining
    // e.g. ["12", "+", "3"] => ["15"]
    while (input.length > 1) {
      let a = input[0]
      let b = input[2]
      const operator = input[1]

      if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        alert("please enter a valid equation to evaluate")
        display.textContent = original
        return
      } else if (operator === "/" && b === 0) {
        alert("nah divide by something else")
        display.textContent = original
        return
      }

      a = a.includes(".") ? parseFloat(input[0]) : parseInt(input[0])
      b = b.includes(".") ? parseFloat(input[2]) : parseInt(input[2])

      const result = operate(a, b, operator)
      input[2] = result
      input = input.slice(2)
    }
  
    display.textContent = input
  }
})