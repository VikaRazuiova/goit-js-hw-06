const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector('#ingredients');
const ingredientsEl = ingredients.forEach(ingredient => {
    let item = document.createElement("li");

    item.innerHTML = ingredient;
    ulList.append(item);

  });

