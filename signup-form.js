const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const freeTrialBtn = document.querySelector(".claim-free-trial-btn");
const firstNameErrorMessage = document.getElementById("first-name-error-msg");
const lastNameErrorMessage = document.getElementById("last-name-error-msg");
const emailErrorMessage = document.getElementById("email-error-msg");
const passwordErrorMessage = document.getElementById("password-error-msg");

function showErrorBorder(submitCardInfo) {
  if (firstName.value === "" || firstName.value == null) {
    // turns border red
    firstName.classList.add("error-border");
    // displays error icon
    firstName.classList.add("error-icon");
    // display error message
    firstNameErrorMessage.style.visibility = "visible";
  }

  if (lastName.value === "" || lastName.value == null) {
    // turns border red
    lastName.classList.add("error-border");
    // displays error icon
    lastName.classList.add("error-icon");
    // display error message
    lastNameErrorMessage.style.visibility = "visible";
  }

  if (email.value === "" || email.value == null) {
    // turns border red
    email.classList.add("error-border");
    // display error message
    emailErrorMessage.style.visibility = "visible";
    // displays error icon
    email.classList.add("error-icon");
  }

  if (password.value === "" || password.value == null) {
    // turns border red
    password.classList.add("error-border");
    // display error message
    passwordErrorMessage.style.visibility = "visible";
    // displays error icon
    password.classList.add("error-icon");
  }

  // when clicking submit with errors, doesn't refresh page, displays errors
  submitCardInfo.preventDefault();
}

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation() {
  if (email.value.match(pattern)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    emailErrorMessage.style.visibility = "hidden";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    emailErrorMessage.style.visibility = "visible";
  }
}

freeTrialBtn.addEventListener("click", showErrorBorder);

// event listeners below remove error border, error-icon, error message
firstName.addEventListener("focus", function () {
  firstName.classList.remove("error-border");
  firstNameErrorMessage.style.visibility = "hidden";
  firstName.classList.remove("error-icon");
});

lastName.addEventListener("focus", function () {
  lastName.classList.remove("error-border");
  lastNameErrorMessage.style.visibility = "hidden";
  lastName.classList.remove("error-icon");
});

email.addEventListener("focus", function () {
  email.classList.remove("error-border");
  emailErrorMessage.style.visibility = "hidden";
  email.classList.remove("error-icon");
});

password.addEventListener("focus", function () {
  password.classList.remove("error-border");
  passwordErrorMessage.style.visibility = "hidden";
  password.classList.remove("error-icon");
});
