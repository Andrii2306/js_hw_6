const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
const onInput = (event) => {
  span.textContent = event.currentTarget.value;
  event.currentTarget.value.trim() === " "
    ? (span.textContent = "Anonymus")
    : null;
};
input.addEventListener("input", onInput);
