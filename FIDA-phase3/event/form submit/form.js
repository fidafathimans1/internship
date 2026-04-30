const form = document.getElementById("form");
const username = document.getElementById("username");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stops page reload

  if (username.value === "") {
    error.textContent = "Username is required!";
  } else {
    error.textContent = "Form submitted successfully!";
  }
});