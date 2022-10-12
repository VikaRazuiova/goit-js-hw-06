let valuel = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

incrementBtn.addEventListener('click', event => {
  valuel += 1;
  counterValue.innerText = valuel;
});

decrementBtn.addEventListener('click', event => {
  valuel -= 1;
  counterValue.innerText = valuel;
});