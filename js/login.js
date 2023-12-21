// LOGIN

const userNamee = document.querySelector(".username");
const passWord = document.querySelector(".password");

const formbtn = document.getElementById("formbtn");
formbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (userNamee.value.length > 0 && passWord.value.length > 0) {
    window.location.href = "./home.html";
    console.log("true");
  } else {
    alert(`User name va passwordni kiriting!`);
  }
});
