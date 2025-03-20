document.getElementById("search-button").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;

  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter a city name.");
  }
});

function fetchWeatherData(city) {
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        updateWeatherUI(data);
      } else {
        alert("City not found. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      alert("An error occurred. Please try again later.");
    });
}

function updateWeatherUI(data) {
  document.getElementById("city-name").innerText = `City: ${data.name}`;
  document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById("weather-description").innerText = `Weather: ${data.weather[0].description}`;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
