const fullName = document.querySelector("#contact__form-fullname");
const phoneNumber = document.querySelector("#contact__form-phonenumber");
const email = document.querySelector("#contact__form-email");
const textArea = document.querySelector("#contact__form-textarea");
const form = document.querySelector(".contact__form");
const button = document.querySelector(".contact__form-button");
const message = document.querySelector(".contact__form-message");

const fullNameError = document.querySelector(".fullname-error");
const phoneNumberError = document.querySelector(".phonenumber-error");
const emailError = document.querySelector(".email-error");


fullName.addEventListener("keyup", () => {
    checkButton();
    checkName();
});

phoneNumber.addEventListener("keyup", () => {
    checkButton();
    checkNumber();
});

email.addEventListener("keyup", () => {
    checkButton();
    checkEmail();
});

fullName.addEventListener("focusout", () => {
    checkButton();
    checkNameFocusOut();
});

phoneNumber.addEventListener("focusout", () => {
    checkButton();
    checkNumberFocusOut();
});

email.addEventListener("focusout", () => {
    checkButton();
    checkEmailFocusOut();
});

function checkName() {
    if(checkForm(fullName.value, 2)) {
        fullNameError.style.display = "none";
    }
}

function checkNumber() {
    if(validatePhone(phoneNumber.value)) {
        phoneNumberError.style.display = "none";
    }
}

function checkEmail() {
    if(validateEmail(email.value)) {
        emailError.style.display = "none";
    }
}

function checkNameFocusOut() {
    if(checkForm(fullName.value, 2)) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }
}

function checkNumberFocusOut() {
    if(validatePhone(phoneNumber.value)) {
        phoneNumberError.style.display = "none";
    }
    else {
        phoneNumberError.style.display = "block";
    }
}

function checkEmailFocusOut() {
    if(validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

function checkButton() {
    if(checkForm(fullName.value, 2) && validatePhone(phoneNumber.value) && validateEmail(email.value)) {
        button.disabled = false;
    }
    else {
        message.innerHTML = "";
        button.disabled = true;
    }
}


button.addEventListener("click", validateForm);

function validateForm(event) {
    event.preventDefault();
    message.style.display = "grid";
    message.innerHTML = "Message sendt!"
    button.disabled = true;
    form.reset();
   
}

function checkForm(value, length) {
    if(value.trim().length >= length) {
        return true;
    }
    else {
        return false;
    }
}

/* RegEX */

//Email
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

//Norwegian phone number
function validatePhone(phone) {
    const regEx = /^(0047|\+47|47)?[2-9]\d{7}$/;
    const patternMatches = regEx.test(phone);
    return patternMatches;
}