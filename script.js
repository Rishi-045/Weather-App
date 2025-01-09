const apiKey = "4c1f778cf78e959f1eee23a3e50cd000";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
      

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "weather-app-img/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "weather-app-img/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "weather-app-img/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "weather-app-img/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "weather-app-img/mist.png";
      } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "weather-app-img/haze.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.log(error);
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
