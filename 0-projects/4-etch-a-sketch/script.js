"use strict"

console.log("sup")

const container = document.querySelector("#container")
for (let i = 0; i < 4; i++) {
  const pixel = document.createElement("div")
  pixel.setAttribute("class", "pixel")
  container.appendChild(pixel)
}