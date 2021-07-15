let author = document.getElementById("author");

fetch('https://api.unsplash.com/photos/random?client_id=LG2rIkefC7PHx4Xj15Sp0hTXf5v3Z2jq11mlut_0H3k&orientation=landscape&query=snow')
.then(response => response.json())
.then(data => {
  document.body.style.backgroundImage = `url('${data.urls.regular}')`
  author.innerText = data.user.name
})
