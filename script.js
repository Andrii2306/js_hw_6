// #1
const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

const categoryElement = categories.forEach(function (category) {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});

// #2
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const product = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const addLi = document.createElement("li");
  addLi.textContent = ingredients[i];
  addLi.classList.add("item");
  product.append(addLi);
}

// #3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
const li = images
  .map(
    (image) =>
      `<li class="img"><img src=${image.url} alt=${image.alt}width=360 height=240></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", li);

//  #4
let counterValue = 0;
const btn = document.querySelectorAll("button");
let value = document.querySelector("#value");
btn[0].addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
btn[1].addEventListener("click", () => {
  value.textContent = counterValue += 1;
});

//  #5
const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");
const onInput = (event) => {
  span.textContent = event.currentTarget.value;
  event.currentTarget.value.trim() === " "
    ? (span.textContent = "Anonymus")
    : null;
};
input.addEventListener("input", onInput);

//  #6
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

//  #7
const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.value = 16;
range.addEventListener("input", (e) => {
  text.style.fontSize = range.value + "px";
});

//  №8
const login = document.querySelector(".login-form");
login.addEventListener("submit", submit);
function submit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const logData = {
    email: email.value,
    password: password.value,
  };
  console.log(logData);
  e.currentTarget.reset();
}
// #9
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
btnChange.addEventListener("click", changeColor);
function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.replaceChildren(getRandomHexColor(toString));
}
