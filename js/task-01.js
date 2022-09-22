const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

const categoryElement = categories.forEach(function (category) {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
