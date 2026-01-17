const form = document.querySelector('form.login-form');

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
 if (email === "" || password === "") {
    return alert(`All form fields must be filled in`)
  }
  const formEl = {
    email: email,
    password: password,
  };
  console.log(formEl)
  form.reset();
}
