const counter = {
    minusBtnEl: document.querySelector('[data-action="decrement"]'),
    plusBtnEl: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
    counterValue: 0,
}

let { minusBtnEl, plusBtnEl, valueEl, counterValue } = counter;

const onMinusBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
};

const onPlusBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
};

minusBtnEl.addEventListener("click", onMinusBtnClick);
plusBtnEl.addEventListener("click", onPlusBtnClick);