class Weather {
  constructor(city, country) {
    this.apiKey = "bfaa613564b6762cbea175fd750e8735";
    this.country = country;
    this.city = city;
    this.units = "metric";
    this.lang = "kr"
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.units}&lang=${this.lang}&appid=${this.apiKey}`);

    const weatherData = await response.json();
    
    return weatherData;
  }

  async getWeatherIcon() {
    const response = await fetch(``)
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}