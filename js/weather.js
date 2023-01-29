const API_KEY = "2918a4c5210f131fa817c206c676ce16";
let locationIcon = document.querySelector(".weather-icon");
const icon = data.weather[0];

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("You live in", latitude, longitude);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      locationIcon.innerHTML = `<img src="openweathermap-api-icons-master/icons/${icon}.png">;`;
    });
}

function onGeoError() {
  alert("We can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//이걸 쓰면 브라우저에서 위치 좌표가 준다.
//argument 2개 필요
