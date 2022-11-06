function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
  bgColorEl: document.querySelector('.color'),
}


function onColorChange(event) {
  const color = getRandomHexColor(event);
  refs.bodyEl.style.backgroundColor = color;
  refs.bgColorEl.textContent = color;
}

refs.buttonEl.addEventListener('click', onColorChange);
