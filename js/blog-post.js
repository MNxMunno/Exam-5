const blogPost = document.querySelector(".cards");

const userId = localStorage.getItem("userId");
async function fitchBlock() {
  try {
    let rest = await fetch("http://localhost:3000/posts");
    let date = await rest.json();
    let filtereData = date.filter((e) => e.id == userId);
    displayTodos(filtereData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock();

function displayTodos(event) {
  let Str = "";

  event.map((eve) => {
    Str += `
            <div class="card">
              <img src="${eve.image}" alt="">
              <div class="card_text">
              <h3 class="purple">${eve.author}</h3>
              <span class="date">${eve.date}</span>
              <h1 class="title">${eve.title}</h1>
              <h4 class="category">${eve.category}</h4>
              <p class="gray gray1">${eve.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              <p class="gray ">${eve.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              </div>
            </div>
        `;
  });
  blogPost.innerHTML = Str;
}
