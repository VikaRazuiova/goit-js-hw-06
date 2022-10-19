function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

colorSpan.textContent = getRandomHexColor();
button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
});



