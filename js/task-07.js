const elements = {
    sliderEl: document.querySelector("#font-size-control"),
    txtEl: document.querySelector("#text"),
}
const { sliderEl, txtEl } = elements;

const onSliderScroll = event => {
    const currentSize = event.currentTarget.value;
    txtEl.style.fontSize = `${currentSize}px`;
}

sliderEl.addEventListener("input", onSliderScroll);