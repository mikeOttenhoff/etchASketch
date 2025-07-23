"use strict";
const body = document.querySelector("body");
let gridsize;

const titleContainer = document.createElement("div");
titleContainer.classList.add("titleContainer");
const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";

const subTitle = document.createElement("h2");
subTitle.textContent = "Move you cursor over the tiles to color them in";

titleContainer.append(title, subTitle);
body.append(titleContainer);

/////////////////////////////////////////////////////////////////////////////////////////////
// Header - start
const containerSizeInput = document.createElement("div");
containerSizeInput.classList.add("containerSizeInput");

//creating input for pixel count
const pixelCountControl = document.createElement("input");
pixelCountControl.type = "text";
pixelCountControl.id = "pixelCount";
pixelCountControl.placeholder = "1 - 100 ";

// Creating label that accompanies input
const pixelCountControlLabel = document.createElement("Label");
pixelCountControlLabel.innerText = "Choose your row and column pixel count";

// creating the button to confirm input
const setPixelCountButton = document.createElement("button");
setPixelCountButton.textContent = "Set Grid Size";

// Simple div to group Label, Input and button
const pixelCountContainer = document.createElement("div");
pixelCountContainer.classList.add("pixelCountContainer");

pixelCountContainer.append(
  pixelCountControlLabel,
  pixelCountControl,
  setPixelCountButton
);
containerSizeInput.append(pixelCountContainer);
body.appendChild(containerSizeInput);

//Random color
const randomColor = function () {
  let colorPath = Math.round,
    random = Math.random,
    maxInput = 255;
  return (
    "rgba(" +
    colorPath(random() * maxInput) +
    "," +
    colorPath(random() * maxInput) +
    "," +
    colorPath(random() * maxInput) +
    "," +
    random().toFixed(1) +
    ")"
  );
};

// Setup grid size control (How many pixel in the vertical and horizontal space)
setPixelCountButton.addEventListener("click", function () {
  let inputValue = parseInt(pixelCountControl.value);
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

    // The backgroundcolor below sets the color
    pixelElement.addEventListener("mouseover", function () {
      this.style.backgroundColor = randomColor();
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

//creating input for grid size
const gridSizeControl = document.createElement("input");
gridSizeControl.type = "text";
gridSizeControl.id = "gridSize";
gridSizeControl.placeholder = "Set your container size";
gridSizeControl.addEventListener("input", function () {
  let value = gridSizeControl.value;
  return value;
});

// Creating label that accompanies input
const gridSizeControlLabel = document.createElement("Label");
gridSizeControlLabel.innerText = "Choose your container size";

// creating the button to confirm input
const setGridButton = document.createElement("button");
setGridButton.textContent = "Set Grid Size";

// Simple div to group Label, Input and button
const containerSizeContainer = document.createElement("div");
containerSizeContainer.classList.add("containerSizeContainer");

containerSizeContainer.append(
  gridSizeControlLabel,
  gridSizeControl,
  setGridButton
);
containerSizeInput.append(containerSizeContainer);
body.appendChild(containerSizeInput);

//Setup container size control
setGridButton.addEventListener("click", function () {
  let inputValue = parseInt(gridSizeControl.value);
  return containerSize(inputValue);
});

/////////////////////////////////////////////////////////////////////////////////////////////
// Header - end

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

// Adjust the size of the pixels and it's white border
const pixelWidthAdjustments = function () {
  const pixelClass = document.querySelectorAll(".pixel");
  pixelClass.forEach(function (e) {
    e.style.width = gridSize.size;
    e.style.height = gridSize.size;
    e.style.border = `${gridSize.size} solid  #fff`;
  });
};

//Change the width and height of the element with the container class
const containerSize = function (size) {
  container.style.width = `${size}px`;
  container.style.height = `${size}px`;
};
