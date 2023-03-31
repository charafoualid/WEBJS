function renderWeather(weather){
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results");
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
    if(weatherDetails && weatherDetails.description){
        var description = document.createElement("p");
        description.textContent = "Description: " + weatherDetails.description;
        resultsContainer.append(description);
    }

    details.append("")
}

//Fetch weather data for city
function fetchWeather(query){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Tilburg&units=imperial&appid=2158b761cc7aecf9f34cade3f4fe213e";

    fetch(url)
     .then((response) => response.json())
     .then((data) => renderWeather(data));
}

fetchWeather();