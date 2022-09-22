const login = document.querySelector(".login-form");
login.addEventListener("submit", submit);
function submit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const logData = {
    email: email.value,
    password: password.value,
  };
  console.log(logData);
  e.currentTarget.reset();
}
