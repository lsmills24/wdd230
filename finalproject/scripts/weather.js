const weatherIcon = document.querySelector('#weather-icon');
const tomWeatherIcon = document.querySelector('#tom-weather-icon');
const captionFull = document.querySelector('#today');
const captionTom = document.querySelector('#tomorrow');
const todayHigh = document.querySelector('#high-temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=metric&appid=74643478560a639ceeb3b3f8b8fddddc';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&units=metric&appid=74643478560a639ceeb3b3f8b8fddddc';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const response2 = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            // console.log(data);
            // console.log(data2);
            displayResults(data);
            displayForecast(data2);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    let iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let temp = Math.round(data.main.temp);
    let humid = data.main.humidity;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionFull.innerHTML = `Today's Forecast: <br>${temp}&deg;C — ${desc} <br>with ${humid}% humidity`;
    todayHigh.textContent = `${Math.round(data.main.temp_max)}`
}

function displayForecast(data2) {
    let tomIconsrc = `https://openweathermap.org/img/wn/${data2.list[4].weather[0].icon}.png`;
    let tomTemp = Math.round(data2.list[4].main.temp);
    let tomDesc = data2.list[4].weather[0].description;
    tomWeatherIcon.setAttribute('src', tomIconsrc);
    tomWeatherIcon.setAttribute('alt', tomDesc);

    captionTom.innerHTML = `Tomorrow's Forecast: <br>${tomTemp}&deg;C — ${tomDesc}`;
}

function closeBanner() {
    let banner = document.querySelector('#temp-warning');
    banner.style.display = 'none';
}