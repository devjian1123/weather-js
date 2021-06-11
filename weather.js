class Weather {
  constructor(city) {
    this.apiKey = "bfaa613564b6762cbea175fd750e8735";
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const weatherData = await response.json();
    
    return weatherData;
  }

  changeLocation(city) {
    this.city = city;
  }
}