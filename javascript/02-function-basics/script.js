"use strict"

// 1
function add7(n) {
  return n + 7
}

// 2
function multiply(a, b) {
  return a * b
}

// 3
function capitalize(str) {
  return str.at(0).toUpperCase() + str.toLowerCase().substring(1)
}

// 4
function lastLetter(str) {
  return str.at(str.length - 1)
}

console.log(add7(1)) // 8
console.log(multiply(3, 6)) // 18
console.log(capitalize("nICE")) // Nice
console.log(lastLetter("tree")) // e
