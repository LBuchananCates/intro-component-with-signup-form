const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const freeTrialBtn = document.querySelector(".claim-free-trial-btn");

function showErrorBorder(submitCardInfo) {
  if (firstName.value === "" || firstName.value == null) {
    // turns border red
    firstName.classList.add("error-border");
    // display error message
    const firstNameErrorMessage = document.getElementById(
      "first-name-error-msg"
    );
    firstNameErrorMessage.style.visibility = "visible";
    // displays error icon
  }

  if (lastName.value === "" || lastName.value == null) {
    // turns border red
    lastName.classList.add("error-border");
    // display error message
    const lastNameErrorMessage = document.getElementById("last-name-error-msg");
    lastNameErrorMessage.style.visibility = "visible";
    // displays error icon
  }

  if (email.value === "" || email.value == null) {
    // turns border red
    email.classList.add("error-border");
    // display error message
    const emailErrorMessage = document.getElementById("email-error-msg");
    emailErrorMessage.style.visibility = "visible";
    // displays error icon
  }

  if (password.value === "" || password.value == null) {
    // turns border red
    password.classList.add("error-border");
    // display error message
    const passwordErrorMessage = document.getElementById("password-error-msg");
    passwordErrorMessage.style.visibility = "visible";
    // displays error icon
  }
  // when clicking submit with errors, doesn't refresh page, displays errors
  submitCardInfo.preventDefault();
}
freeTrialBtn.addEventListener("click", showErrorBorder);

// upon typing, remove error class
firstName.oninput = () => {
  firstName.innerText = firstName.value;
  firstName.classList.remove("error");
};

// upon typing, remove error class
lastName.oninput = () => {
  lastName.innerText = lastName.value;
  lastName.classList.remove("error");
};

// upon typing, remove error class
email.oninput = () => {
  email.innerText = email.value;
  email.classList.remove("error");
};

// upon typing, remove error class
password.oninput = () => {
  password.innerText = password.value;
  password.classList.remove("error");
};
