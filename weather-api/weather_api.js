export class WeatherApi {
    constructor(weatherEl) {
      this.weatherEl = weatherEl;
    }
  
    renderWeather(weather) {
      console.log(weather);
      var resultsContainer = document.querySelector("#weather-results");
      resultsContainer.innerHTML = '';
  
      var city = document.createElement("h2");
      city.textContent = weather.name;
      resultsContainer.append(city);
  
      var temp = document.createElement("p");
      temp.textContent = "Temp: " + weather.main.temp + " F";
      resultsContainer.append(temp);
  
      var humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + weather.main.humidity + " %";
      resultsContainer.append(humidity);
  
      var wind = document.createElement("p");
      wind.textContent = "Wind: " + weather.wind.speed + " mph, " + weather.wind.deg + "°";
      resultsContainer.append(wind);
  
      var weatherDetails = weather.weather[0];
      if (weatherDetails && weatherDetails.description) {
        var description = document.createElement("p");
        description.textContent = "Description: " + weatherDetails.description;
        resultsContainer.append(description);
      }
  
      const transportTypeSelect = document.getElementById('transport-type');
      if (weather.main.temp > 60 && transportTypeSelect.value === 'Koud transport') {
        this.weatherEl.innerHTML = 'Te warm voor koud transport';
      } else {
        this.weatherEl.innerHTML = '';
        this.weatherEl.appendChild(resultsContainer);
      }
    }
  
    fetchLocalWeather() {
      let input = document.getElementById("myText").value;
      console.log(input);
  
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=2158b761cc7aecf9f34cade3f4fe213e";
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.renderWeather(data));
    }
  }
  
  let weatherApiEL = document.getElementById('weather-results');
  let weatherApi = new WeatherApi(weatherApiEL);
  let button = document.getElementById('run');
  button.addEventListener("click", fetchWeather);
  
  function fetchWeather() {
    weatherApi.fetchLocalWeather();
  }
  