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

    //username field validation
    if (usernameValue === "") {
        setErrorClass(username, "Username cannot be blank");
    } else {
        setSuccessClass(username);
    }

    //email validation with regex
    if (emailValue === "") {
        setErrorClass(email, "Email is can't be blink");
    } else if (!isEmail(emailValue)) {
        setErrorClass(email, "Email is not valid");
    } else {
        setSuccessClass(email);
    }

    //password validation
    if (passwordValue === "") {
        setErrorClass(password, "Password cannot be blank");
    } else {
        setSuccessClass(password);
    }

    //confirm password validation
    if (confirmPasswordValue === "") {
        setErrorClass(confirmPassword, "The confirm password cannot be blank");
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorClass(confirmPassword, "The confirm password does not match");
    } else {
        setSuccessClass(confirmPassword);
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

//testing with regex the inptu email address
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
