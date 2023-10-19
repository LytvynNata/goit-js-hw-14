const categories = document.querySelector("#categories");

const numberOfCategories = categories.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.querySelectorAll("li.item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const numberOfItems = category.querySelectorAll("li").length;

  console.log(`Category: ${title}, Elements: ${numberOfItems}`);
});
