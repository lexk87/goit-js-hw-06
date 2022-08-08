const elements = {
    nameInputEl: document.querySelector("#name-input"),
    nameOutputEl: document.querySelector("#name-output"),
}

const { nameInputEl, nameOutputEl } = elements;

const onNameInputChange = event =>
    event.currentTarget.value === ""
        ? nameOutputEl.textContent = "Anonymous"
        : nameOutputEl.textContent = event.currentTarget.value;

nameInputEl.addEventListener("input", onNameInputChange);