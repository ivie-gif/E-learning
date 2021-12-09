// Declare the var names of the input fields according to their IDs
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnSubmit = document.getElementById("btnSubmit");
const allFields = document.getElementById("allFields");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Using the addEventListener to validate the form inputs
// 1. eventlisterner takes in two arguments, an event type and a function
// 2. Declaring a var and assigning the input values
// 3. Using a Regular Expression (Regex) to valida the email address
// 4. Using a Regular Expression to Validate the Password Field to accept
//    characters, minimum length, upper and lower case, special character
btnSubmit.addEventListener("click", function () {
  const getFullname = fullname.value;
  const getEmail = email.value;
  const getPassword = password.value;
  const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  // If statement to validate:
  // 1. If all the input fields are emplty, throw up an error using innerHTML to write to the DOM
  // 2. if email & password fields are empty, prompt the user to type in an email address
  // 3. Using javascript to style the error message(id.style.styleDeclaration=Value )
  // 4. If the Email field is wrongly typed inform the user to type in a correct or valid email adress
  // 5. If the password field is wrongly typed inform the user to type in a correct or valid password
  // 6. If all input fields are rightly filled and validated correctly, then push user to the login page
  if (getFullname === "" && getEmail === "" && getPassword === "") {
    document.getElementById("allFields").innerHTML = "*All Fields Required*";
  } else if (getEmail === "" && getPassword === "") {
    document.getElementById("emailError").textContent = "enter email address";
    document.getElementById("passwordError").textContent = "enter password";
    emailError.style.textTransform = "Capitalize";
    passwordError.style.textTransform = "Capitalize";
  } else if (!getEmail.match(validMail)) {
    document.getElementById("emailError").innerHTML = "enter valid email";
  } else if (!getPassword.match(validPassword)) {
    document.getElementById("passwordError").innerHTML =
      " Password must contain <br>8 characters<br> lower & upper cases<br> special character";
  } else {
    window.location.href = "/login.html";
  }
});

// To clear off Error Messages during validation:
// 1. Declaring a var and assigning the input values
// 2. If any of the input fields are being filled, clearOff the initial error message
// 3. If all the email field is being filled, clearOff the initial error message
// 4. If all the password field is being filled, clearOff the initial error message
const clearErrorMessage = () => {
  const getFullname = fullname.value;
  const getEmail = email.value;
  const getPassword = password.value;

  if (getFullname || getEmail || getPassword) {
    allFields.innerHTML = "";
  }
  if (getEmail) {
    document.getElementById("emailError").innerHTML = "";
  }
  if (getPassword) {
    document.getElementById("passwordError").innerHTML = "";
  }
};
