// REGISTER

const firstName = document.getElementById("Firstname");
const lastName = document.getElementById("Lastname");
const userName = document.getElementById("Username");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmPasswordError");
const dddForm = document.getElementById("regForm");
dddForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    userName.value.length > 0 &&
    password.value.length > 0 &&
    confirmPassword.value.length > 0
  ) {
    window.location.href = "./pages/login.html";
    console.log("true");
  } else {
    alert(`Ma'lumotingizni to'ldiring`);
  }
});
