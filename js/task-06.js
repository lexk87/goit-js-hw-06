const textAreaEl = document.querySelector("#validation-input");

const changeClass = (classToAdd, classToRemove) => {
    textAreaEl.classList.add(classToAdd);
    textAreaEl.classList.remove(classToRemove);
}

const onTextAreaBlur = event => {
    const validLength = Number(textAreaEl.dataset.length);
    const currentLength = event.currentTarget.value.length;
    if (currentLength === validLength) {
        return changeClass("valid", "invalid");
    }
    changeClass("invalid", "valid");
};

textAreaEl.addEventListener("blur", onTextAreaBlur);