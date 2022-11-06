const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
console.log(list);

for (const ingredient of ingredients) {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  newLi.classList.add("item");
  list.append(newLi);
  
}