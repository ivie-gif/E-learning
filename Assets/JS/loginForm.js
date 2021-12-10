//  Declaring all the input fields in the form, targeting the id
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginSubmit = document.getElementById("loginSubmit");
const allLoginFields = document.getElementById("allLoginFields");
const errorEmailLogin = document.getElementById("errorEmailLogin");
const errorPasswordLogin = document.getElementById("errorPasswordLogin");

// Using the addEventListener to validate the form inputs
// 1. Eventlisterner takes in two arguments, an event type and a function
// 2. Declaring a var and assigning the input values
// 3. Using a Regular Expression (Regex) to valida the email address
// 4. Using a Regular Expression to Validate the Password Field to accept
//    characters, minimum length, upper and lower case, special character
loginSubmit.addEventListener("click", function () {
  getEmail = email.value;
  getPassword = password.value;
  const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  // If statement to validate:
  // 1. If all the input fields are empty, throw up an error using innerHTML to write to the DOM
  // 2. if email & password fields are empty, prompt the user to type in an email address
  // 3. Using javascript to style the error message(id.style.styleDeclaration=Value )
  // 4. If the Email field is wrongly typed inform the user to type in a correct or valid email address
  // 5. If the password field is wrongly typed inform the user to type in a correct or valid password
  // 6. If all input fields are rightly filled and validated correctly, then push user to the dashboard page
  if (getEmail === "" && getPassword === "") {
    document.getElementById("allLoginFields").innerHTML =
      "*All Fields Required*";
  } else if (getEmail === "" && getPassword === "") {
    document.getElementById("errorEmailLogin").textContent =
      "enter email address";
    document.getElementById("errorPasswordLogin").textContent =
      "enter password";
    errorEmailLogin.style.textTransform = "Capitalize";
    errorPasswordLogin.style.textTransform = "Capitalize";
  } else if (!getEmail.match(validMail)) {
    document.getElementById("errorEmailLogin").innerHTML = "enter valid email";
    errorEmailLogin.style.textTransform = "Capitalize";
  } else if (!getPassword.match(validPassword)) {
    document.getElementById("errorPasswordLogin").innerHTML =
      "Enter Valid Password";
    errorPasswordLogin.style.marginBottom = "15%";
  } else {
    window.location.href = "/dashboard.html";
  }
});

// To clear off Error Messages during validation:
// 1. Declaring a var and assigning the input values
// 2. If any of the input fields are being filled, clearOff the initial error message
// 3. If the email field is being filled, clearOff the initial error message
// 4. If the password field is being filled, clearOff the initial error message
const loginErrorClearing = () => {
  getEmail = email.value;
  getPassword = password.value;

  if (getEmail || getPassword) {
    allLoginFields.innerHTML = "";
  }
  if (getEmail) {
    errorEmailLogin.innerHTML = "";
  }
  if (getPassword) {
    errorPasswordLogin.innerHTML = "";
  }
};
