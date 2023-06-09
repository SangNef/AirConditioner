const powerButton = document.getElementById("power");
const screen = document.getElementById("screen");
const num_air = document.getElementById("num_air");

screen.style.display = "none";
num_air.style.display = "none";
powerButton.addEventListener("click", () => {
  if (screen.style.display === "none") {
    screen.style.display = "flex";
    vents.style.height = "0px";
    num_air.style.display = "block";
  } else {
    screen.style.display = "none";
    vents.style.height = "32px";
    num_air.style.display = "none";
  }
});

const num = document.getElementById("num");
const up = document.getElementById("up");
const down = document.getElementById("down");

let a = 16;

up.addEventListener("click", () => {
  if (screen.style.display === "flex" && a < 30) {
    a++;
  }
  num.innerText = a;
  num_air.innerText = a;
  console.log(a);
});

down.addEventListener("click", () => {
  if (screen.style.display === "flex" && a > 16) {
    a--;
  }
  num.innerText = a;
  console.log(a);
});

const mode = document.getElementById("mode");
const mode_screen = document.getElementById("mode_screen");
const modeIcons = [
  '<i class="fa-solid fa-snowflake"></i>',
  '<i class="fa-solid fa-droplet"></i>',
  '<i class="fa-solid fa-fan"></i>',
];
let currentIconIndex = 0;

mode.addEventListener("click", () => {
  if (screen.style.display === "flex") {
    mode_screen.innerHTML = modeIcons[currentIconIndex];
    currentIconIndex = (currentIconIndex + 1) % modeIcons.length;
  }
});

const lightButton = document.getElementById("light");
const body = document.body;

lightButton.addEventListener("click", () => {
  if (screen.style.display === "flex") {
    if (body.style.backgroundColor === "rgb(15, 23, 42)") {
      body.style.backgroundColor = "#eee";
    } else {
      body.style.backgroundColor = "rgb(15, 23, 42)";
    }
  }
});

const swingButton = document.getElementById("swing");
const vents = document.getElementById("vents");
const heights = ["0px", "8px", "20px"];
let currentHeightIndex = 0;

swingButton.addEventListener("click", () => {
  if (screen.style.display === "flex") {
    vents.style.height = "8px";
    vents.style.height = heights[currentHeightIndex];
    currentHeightIndex = (currentHeightIndex + 1) % heights.length;
  } 
});

const speedButton = document.getElementById("speed");
const speedScreen = document.getElementById("speed_screen");
const values = ["40%", "60%", "80%", "100%"];
let currentValueIndex = 0;

speedButton.addEventListener("click", () => {
  if (screen.style.display === "flex") {
    speedScreen.innerText = values[currentValueIndex];
    currentValueIndex = (currentValueIndex + 1) % values.length;
  }
});

const batteryButton = document.getElementById("battery");
const batteryScreen = document.getElementById("battery_screen");
const texts = [
  '<i class="fas fa-battery-full"></i>',
  '<i class="fas fa-battery-three-quarters"></i>',
  '<i class="fas fa-battery-half"></i>',
];
let currentTextIndex = 0;

batteryButton.addEventListener("click", () => {
  if (screen.style.display === "flex") {
    batteryScreen.innerHTML = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }
});
