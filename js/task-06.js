const textAreaEl = document.querySelector("#validation-input");
const validLength = Number(textAreaEl.dataset.length);

const onTextAreaBlur = event => {
    const currentLength = event.currentTarget.value.length;
    if (currentLength === validLength) {
        textAreaEl.classList.add("valid");
        textAreaEl.classList.remove("invalid");
        return;
    }
    textAreaEl.classList.add("invalid");
    textAreaEl.classList.remove("valid");
};

textAreaEl.addEventListener("blur", onTextAreaBlur);