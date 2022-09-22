function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
btnChange.addEventListener("click", changeColor);
function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.replaceChildren(getRandomHexColor(toString));
}
