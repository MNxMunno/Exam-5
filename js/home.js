const homePage = document.querySelector(".cards");

const userId = localStorage.getItem("userId");
async function fitchBloc() {
  try {
    let rest = await fetch("http://localhost:3000/posts");
    let date = await rest.json();
    let filtereData = date.slice(date.length - 3, date.length);
    displayTodos(filtereData);
  } catch (error) {
    console.log(error);
  }
}
fitchBloc();

console.log(userId);

function displayTodos(event) {
  let Str = "";

  event.map((eve) => {
    Str += `
            <a href="./blog.html" onclick="getPost(${eve.id})">
            <div class="card">
              <img src="${eve.image}" alt="">
              <div class="texts">
              <p>${eve.date}</p>
              <h3>${eve.title}</h3>
              <p>${eve.description}</p>
              </div>
            </div>
            </a>
        `;
  });
  homePage.innerHTML = Str;
}

function getPost(id) {
  localStorage.setItem("userId", id);
  console.log(id);
}
