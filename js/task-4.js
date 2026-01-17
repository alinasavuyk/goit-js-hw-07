const form = document.querySelector('form.login-form');

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const currentForm = event.target;
  const email = currentForm.elements.email.value.trim();
  const password = currentForm.elements.password.value.trim();
 if (email === "" || password === "") {
    return alert(`All form fields must be filled in`)
  }
  const formEl = {
    email: email,
    password: password,
  };
  console.log(formEl)
  currentForm.reset();
}
