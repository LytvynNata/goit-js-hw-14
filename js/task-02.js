const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.textContent = ingredient;

  liElement.classList.add("item");

elements.push(liElement);
});

ingredientsList.append(...elements);