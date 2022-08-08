const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

function makeList(arr, tag) {
  const listArr = [];

  arr.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = item;
    listArr.push(listItem);
  });

  tag.append(...listArr);
}

makeList(ingredients, ingredientsListEl);