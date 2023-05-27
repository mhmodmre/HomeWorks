class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const postsElement = document.getElementById("posts");
  postsElement.innerHTML = "";

  posts.forEach((post, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button onclick="deletePost(${index})">Delete</button>
      `;
    postsElement.appendChild(li);
  });
}

function createPost(event) {
  event.preventDefault();

  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  const title = titleInput.value;
  const content = contentInput.value;

  const post = new Post(title, content);

  posts.push(post);

  localStorage.setItem("posts", JSON.stringify(posts));

  // Clear form inputs
  titleInput.value = "";
  contentInput.value = "";

  renderPosts();
}

function deletePost(index) {
  posts.splice(index, 1);

  localStorage.setItem("posts", JSON.stringify(posts));

  renderPosts();
}

document.getElementById("posts").addEventListener("click", deletePost);

document.getElementById("postForm").addEventListener("submit", createPost);

renderPosts();
