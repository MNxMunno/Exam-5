const postCard = document.querySelector(".cards");
const searchInput = document.getElementById("search");
const infosList = document
  .getElementById("cards")
  .getElementsByClassName("post");

async function getPosts() {
  try {
    let rest = await fetch("http://localhost:3000/posts");
    let date = await rest.json();
    pushPosts(date);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

function pushPosts(user) {
  let Str = "";

  user.map((u) => {
    Str += `
            <a href="./blog.html" onclick="getPost(${u.id})" class="post">
              <div class="card-img">
                <img src="${u.image}" alt="">
              </div>
              <div class="card">
                <p class="purple">${u.category}</p>
                <h2>${u.title}</h2>
                <p>${u.description}</p>
                <p class="job">${u.author}</p>
              </div>
            </a>
        `;
  });
  postCard.innerHTML = Str;
}

function getPost(id) {
  localStorage.setItem("userId", id);
  console.log(id);
}

// search

function search() {
  const searchWords = searchInput.value.toLowerCase();

  for (let i = 0; i < infosList.length; i++) {
    const info = infosList[i].textContent.toLowerCase();

    if (info.indexOf(searchWords) > -1) {
      infosList[i].style.display = "";
    } else {
      infosList[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("input", search);
