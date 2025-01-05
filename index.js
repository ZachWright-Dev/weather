const apiKey = "eed54e9d5336af0bb6009e9388572dda"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial"

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
    

    if (response.status == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = 'none'
    } else {
        
        const data = await response.json()
        console.log(data)
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " mi/hr"
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F"

        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
        weatherIcon = document.querySelector('.weather-icon')
        
        if (data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png'
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'images/clouds.png'
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = 'images/mist.png'
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = 'images/snow.png'
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = 'images/rain.png'
        }
    }   
}

const button = document.querySelector('button')

async function handleButton(){
    const city = document.querySelector('input').value
    await checkWeather(city)
}

button.addEventListener("click", handleButton)