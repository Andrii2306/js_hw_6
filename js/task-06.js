const input6 = document.querySelector("#validation-input");
const dataLength = document.querySelector("[data-length]");
const lengthN = Number(dataLength.attributes[2].textContent);
input6.addEventListener("blur", () => {
  if (input6.value.length === lengthN) {
    input6.classList.remove("invalid");
    return input6.classList.add("valid");
  } else {
    input6.classList.remove("valid");
    return input6.classList.add("invalid");
  }
});
