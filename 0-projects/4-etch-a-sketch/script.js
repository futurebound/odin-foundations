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
  
    // add hover listener to progressively darken pixels on successive hovers
    pixel.addEventListener("mouseover", () => {
      if (!pixel.classList.contains("hovered")) {
        pixel.classList.add("hovered")

      } else { // 2nd+ time hovering
        // extract the current alpha value
        // if alpha < 1.0, add 0.1 to it
        const oldBackgroundColor = 
            getComputedStyle(pixel).getPropertyValue("background-color")
        let colors = oldBackgroundColor.split(", ")
        if (parseFloat(colors[3]) < 1.0) {
          colors[3] = parseFloat(colors[3]) + 0.1
          pixel.style.backgroundColor = `${colors})`
        } 
      }
    })

    container.appendChild(pixel)
  }
}


const button = document.querySelector("#generate-btn")
button.addEventListener("click", generateGrid)








// may need to dynamically change flex-basis based on the
//  sqrt(size) -> if size = 4, flex-basis should be 


