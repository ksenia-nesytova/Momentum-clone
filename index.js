const author = document.getElementById("author");
let userQuery = 'mountain';

fetch(`https://api.unsplash.com/photos/random?client_id=LG2rIkefC7PHx4Xj15Sp0hTXf5v3Z2jq11mlut_0H3k&orientation=landscape&query=${userQuery}`)
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url('${data.urls.regular}')`
    author.innerText = data.user.name
    author.href = data.user.links.html
  })
  .catch(err => {
    console.error(err);
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1455813879542-fdcede6da042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDYzNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjYzNDA2OTA&ixlib=rb-1.2.1&q=80&w=1080')`
    author.innerText = "Logan Troxell"
    author.href = data.user.links.html
  }
)


// Get local time
function updateTime() {
  const date = new Date();
  const time = document.getElementById("time");
  const currentTime = date.toLocaleTimeString("ru", {timeStyle: "short"});

  time.innerText = currentTime;
}

setInterval(updateTime, 1000)
