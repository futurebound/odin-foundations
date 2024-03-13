"use strict"

// generate new grid on button press with given size
  // prompt user for size
  //   validate that 0 < size <= 100, re-prompt if not
  // target container div
  //   generate "size" divs and set attributes for CSS (class)
  //   may need to dynamically assign flex values for min-width
  //     based on "size" to get proper spillage

function generateGrid() {
  let size = prompt("Please enter a number between 1 and 100")
  let sizeInt = parseInt(size)
  while (isNaN(sizeInt) || sizeInt < 1 || sizeInt > 100) {
    sizeInt = parseInt(prompt("Please enter a number between 1 and 100"))
  }

  const root = Math.floor(size ** 0.5)
  const ratio = (root / size) * 100
  const widthRatio = 960 / size 
  console.log(`size: ${size} root: ${root} ratio: ${ratio} widthRatio: ${widthRatio}`)

  const container = document.querySelector("#container")
  container.replaceChildren() // clear prior canvas
  for (let i = 0; i < sizeInt ** 2; i++) {
    const pixel = document.createElement("div")
    pixel.setAttribute("class", "pixel")
    pixel.style.minWidth = `${widthRatio}px`
    pixel.style.minHeight = `${widthRatio}px`
    // pixel.setAttribute("min-height", `${widthRatio}px`)
    // pixel.setAttribute("flex-basis", `${ratio}%`)
  
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("hovered")
    })

    container.appendChild(pixel)
  }
}


const button = document.querySelector("#generate-btn")
button.addEventListener("click", generateGrid)








// may need to dynamically change flex-basis based on the
//  sqrt(size) -> if size = 4, flex-basis should be 


