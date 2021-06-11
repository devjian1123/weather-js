// Init Weather bject
const weather = new Weather("KR", "jeonju");

// Init UI Object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather.getWeather()
  .then((weatherData) => {
    ui.paint(weatherData);
  })
  .catch(err => {
    console.log(err);
  });
}
