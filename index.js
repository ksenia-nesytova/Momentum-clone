const author = document.getElementById("author");
let userQuery = 'nature';

fetch(`https://api.unsplash.com/photos/random?client_id=LG2rIkefC7PHx4Xj15Sp0hTXf5v3Z2jq11mlut_0H3k&orientation=landscape&query=${userQuery}`)
  .then(response => response.json())
  .then(data => {
      if(userQuery == false) {
        throw Error("Empty or incorrect query")
      } else {
    document.body.style.backgroundImage = `url('${data.urls.regular}')`
    author.innerText = data.user.name
    author.href = data.user.links.html}
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


// Weather
const weather = document.getElementById("weather")

navigator.geolocation.getCurrentPosition(position => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=123e8ca74b9d763f76b481f72270dda9`)
    .then(res => {
      if (!res.ok) {
            throw Error("Данные о погоде недоступны")
        }
      return res.json()
    })
    .then(data => {
      const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerHTML = `
      <img src=${iconURL} />
      <p>${Math.round(data.main.temp)}ºC</p>
      <p>${data.weather[0].description}</p>
      <p>${data.name}</p>`

    })
     .catch(err => console.error(err))
  }
)
