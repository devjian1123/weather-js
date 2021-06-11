// Init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather bject
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI Object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  weather.changeLocation(city, country);

  storage.setLocationData(city, country);

  getWeather();

  const modalEl = document.querySelector("#locModal");
  const modal = bootstrap.Modal.getInstance(modalEl);

  modal.hide();
});

function getWeather() {
  weather.getWeather()
  .then((weatherData) => {
    ui.paint(weatherData);
  })
  .catch(err => {
    console.log(err);
  });
}
