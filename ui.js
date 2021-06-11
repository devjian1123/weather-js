class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.humidity = document.querySelector("#w-humidity");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weatherData) {
    this.location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    this.desc.textContent = weatherData.weather[0].description;
    this.string.textContent = weatherData.main.temp + " \u2103";
    const img = document.createElement("img");
    img.setAttribute("src", `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`);
    this.string.insertBefore(img, this.string.firstChild);
    this.humidity.textContent = `상대습도: ${weatherData.main.humidity}%`;
    this.feelsLike.textContent = `체감온도: ${weatherData.main.feels_like} \u2103`;
    this.wind.textContent = `바람: ${weatherData.wind.speed} m/s`
  }
}