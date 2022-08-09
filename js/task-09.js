function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const elements = {
  bodyEl: document.querySelector("body"),
  colorNameEl: document.querySelector(".color"),
  changeColorBtnEl: document.querySelector(".change-color"),
};
const { bodyEl, colorNameEl, changeColorBtnEl } = elements;

const onChangeColorBtnClick = () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorNameEl.textContent = randomColor;
};

changeColorBtnEl.addEventListener("click", onChangeColorBtnClick);