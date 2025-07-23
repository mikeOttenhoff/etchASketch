"use strict";
const body = document.querySelector("body");

const containerSizeInput = document.createElement("div");
containerSizeInput.classList.add("containerSizeInput");

//creating input for grid size
const gridSizeControl = document.createElement("input");
gridSizeControl.type = "text";
gridSizeControl.id = "gridSize";
gridSizeControl.addEventListener("input", function () {
  let value = gridSizeControl.value;
  return value;
});

// Creating label that accompanies input
const gridSizeControlLabel = document.createElement("Label");
gridSizeControlLabel.innerText = "Choose your row and column size";

// creating the button to confirm input
const setGridButton = document.createElement("button");
setGridButton.textContent = "Set Grid Size";

containerSizeInput.append(gridSizeControlLabel, gridSizeControl, setGridButton);
body.appendChild(containerSizeInput);

setGridButton.addEventListener("click", function () {
  let inputValue = parseInt(gridSizeControl.value);
  if (isNaN(inputValue) || inputValue <= 0 || inputValue >= 101) {
    alert(
      "Please enter a valid positive number for grid size between 0 and 100."
    );
    return;
  }
  container.innerHTML = "";

  gridSize = pixelChoice(inputValue);

  for (let pixel = 1; pixel < gridSize.totalPixels; pixel++) {
    const pixelElement = document.createElement("div");
    pixelElement.classList.add("pixel");

    // first i tried only a mouseenter event but the click gives you more control
    pixelElement.addEventListener("click", function () {
      this.style.backgroundColor = "green";
    });

    // this gives you the option to reset your pixels with right mouse button
    pixelElement.addEventListener("contextmenu", function (e) {
      // the preventDefault() makes sure that said contextmenu doesn't appear
      e.preventDefault();
      this.style.backgroundColor = "";
    });

    container.append(pixelElement);
  }
  pixelWidthAdjustments();
});

// Create the container for the Etch-a-Sketch grid
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

//This function gives us the width and height percetage for the pixels + how many pixels are needed to fit in the container
const pixelChoice = function (number) {
  let size = `${100 / number}%`;
  let totalPixels = number * number + 1;
  return { size: size, totalPixels: totalPixels };
};
// let gridSize = pixelChoice(30);
console.log(gridSize);

const pixelWidthAdjustments = function () {
  const pixelClass = document.querySelectorAll(".pixel");
  pixelClass.forEach(function (e) {
    e.style.width = gridSize.size;
    e.style.height = gridSize.size;
  });
};

const containerSize = function (size) {
  container.style.width = `${size}px`;
  container.style.height = `${size}px`;
};

containerSize(1500);
