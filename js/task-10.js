function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const elements = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesWrapperEl: document.querySelector("#boxes"),
};
const { inputEl, createBtnEl, destroyBtnEl, boxesWrapperEl } = elements;

const destroyBoxes = () => boxesWrapperEl.innerHTML = "";

const createBoxes = (amount) => {
  amount = inputEl.value;
  const boxArr = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${i * 10 + 30}px`;
    boxEl.style.height = boxEl.style.width;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxArr.push(boxEl);
  };

  boxesWrapperEl.append(...boxArr);
};

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);