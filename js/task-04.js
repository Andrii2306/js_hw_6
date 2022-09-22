let counterValue = 0;
const btn = document.querySelectorAll("button");
let value = document.querySelector("#value");
btn[0].addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
btn[1].addEventListener("click", () => {
  value.textContent = counterValue += 1;
});
