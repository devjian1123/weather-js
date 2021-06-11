// Init weather object
const weather = new Weather("boston");

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather.getWeather()
  .then((weatherData) => {
    console.log(weatherData);
  })
  .catch(err => {
    console.log(err);
  });
}
