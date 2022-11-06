
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

let object = {
    email: " ",
    password: " ",
};

function handleSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('Всі поля повинні бути заповнені!')
  }

    object.email = `Email: ${email.value}`;
    object.password = `Password: ${password.value}`;

    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    console.log(object);
    
  event.currentTarget.reset();
}