const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

// -- Functions --

// check the input values
function checkInputs() {
    //trim remove whitespace from all value

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        setErrorClass(username, "Username cannot be blank");
    } else {
        setSuccessClass(username);
    }
}

//-- setting the error for actual wrong input and send to the user an error message
function setErrorClass(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessClass(input) {
    const formControl = input.parentElement;

    //add error class
    formControl.className = "form-control success";
}
