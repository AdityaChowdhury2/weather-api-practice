const YOUR_ACCESS_KEY = config.YOUR_ACCESS_KEY;
const API_KEY = config.API_KEY;


const city_name = document.getElementById('location');
function getWeather() {
    // console.log(location1.value);
    // console.log(document.getElementById('sd').value);
    // console.log(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${location1.value}`)
    // console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_KEY}`)
    // console.log(document.getElementById('weather-icon').src);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${API_KEY}`)
    // fetch(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${city_name.value}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const tempInKelvin = data.main.temp;
            const convertedTemp = Math.round(tempInKelvin - 273.15);
            // console.log(icon);
            document.getElementById('weather-icon').src = icon;
            document.getElementById('showLocation').innerText = data.name;
            document.getElementById('temperature').innerText = convertedTemp;
            document.getElementById('weather_descriptions').innerText = data.weather[0].description;

            // document.getElementById('weather-icon').src = data.current.weather_icons[0];
            // document.getElementById('showLocation').innerText = data.location.name;
            // document.getElementById('temperature').innerText = data.current.temperature;
            // document.getElementById('weather_descriptions').innerText = data.current.weather_descriptions[0];
            // console.log(data.current.weather_icons[0]);
            // console.log(data.location.name);
            // console.log(data.current.temperature);
            // console.log(data.current.weather_descriptions[0]);
        })
}