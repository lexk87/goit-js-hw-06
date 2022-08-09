const form = document.querySelector(".login-form");

const onFormSend = event => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All of the form fields must be filled!");
    }

    const receivedData = {
        email: email.value,
        password: password.value,
    }

    console.log(receivedData);

    event.currentTarget.reset();
}

form.addEventListener("submit", onFormSend);