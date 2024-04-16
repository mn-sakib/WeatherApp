/*  Warning!!!
Do not use this apiKey! for generating your own,
please open a account with www.openweathermap.org | it's 100% free to use! */
const apiKey = "adfcaba9752caeefe73fb6f8dc85988e" // Do not use this apiKey!
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`
let searchBtn = document.querySelector('.search-btn');
let bgImg = document.querySelector('.wrapper');
let tempIcon = document.querySelector('.tempIcon');

async function checkWeather(city){
    let response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector('.temperature-box').style.display = 'none'
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.location').style.display = 'none'
    } else{
        let data = await response.json();

        document.querySelector('.temp h1').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.temp p').innerHTML = data.weather[0].description;
        document.querySelector('.humidity h3').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind h3').innerHTML = Math.round(data.wind.speed) + ' km/h';
        document.querySelector('.location h3').textContent = "Location: " + data.name;
    
        if (data.weather[0].main == "Clouds"){
            tempIcon.src = "./img/cloud.png";
        } else if (data.weather[0].main == "Clear"){
            tempIcon.src = "./img/clear.png";
        } else if (data.weather[0].main == "Rain"){
            tempIcon.src = "./img/rain.png";
        } else if (data.weather[0].main == "Haze"){
            tempIcon.src = "./img/mist.png";
        } else if (data.weather[0].main == "Snow"){
            tempIcon.src = "./img/snow.png";
        }
    
        document.querySelector('.temperature-box').style.display = 'block'
        document.querySelector('.location').style.display = 'block'
        document.querySelector('.error').style.display = 'none'

    }
}
searchBtn.addEventListener('click', () => {
    let searchValue = document.querySelector(".searchBox").value;
    checkWeather(searchValue);
    document.querySelector(".searchBox").value = "";
})




