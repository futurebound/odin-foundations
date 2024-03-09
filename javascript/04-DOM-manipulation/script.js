"use strict";


function alertFunction(e) {
	e.target.style.background = "blue"
	console.log(e)
	alert(e)
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", alertFunction)


const buttons = document.querySelectorAll("#btn-container button")
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		alert(button.id)
	})
})



/*
<p style="color: red;">Hey I'm red!</p>
<h3 style="color: blue;">I'm a blue h3!</h3>
<div style="border: 2px solid black; background-color: pink;">
	<h1>I'm in a div</h1>
	<p>ME TOO!</p>
</div>
*/

const container = document.querySelector(".container")


const pRed = document.createElement("p")
pRed.style.color = "red"
pRed.textContent = "Hey I'm red!"
container.append(pRed)

const h3Blue = document.createElement("h3")
h3Blue.style.color = "blue"
h3Blue.textContent = "I'm a blue h3!"
container.append(h3Blue)


const div = document.createElement("div")
div.setAttribute("style", "border: 2px solid black; background-color: pink;")

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)

const pDiv = document.createElement("p")
pDiv.textContent = "ME TOO!"
div.appendChild(pDiv)

container.append(div)