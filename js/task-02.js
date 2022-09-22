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
