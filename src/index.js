let now = new Date();

let time = document.querySelector(".currentDate");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

let hours = now.getHours();

let minutes = now.getMinutes();

time.innerHTML = `${day} ${hours}:${minutes}`;

function showCityTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  let temperature = Math.round(response.data.main.temp);
  let localTemperature = document.querySelector("#unit-changer");
  localTemperature.innerHTML = `${temperature}°C`;
}

function enterCity(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let endPoint = `https://api.openweathermap.org/data/2.5/weather?`;
  let city = document.querySelector("#cityName").value;
  let units = `metric`;
  let apiUrl = `${endPoint}q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showCityTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", enterCity);
