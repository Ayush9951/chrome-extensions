let weatherDetails = document.getElementById("weather-details")

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=18b279fbaebde4984559089aed3d2e2b`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            weatherDetails.textContent = data.main.temp.toFixed(2) + '\u00B0' + "C in " + data.name + ", " + data.weather[0].description
        })
})
