const weatherIcon = document.querySelector('#weather-icon');
const captionFull = document.querySelector('figcaption'); //Put all info together in figcaption

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-111.96&units=imperial&appid=74643478560a639ceeb3b3f8b8fddddc';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionFull.innerHTML = `${Math.round(data.main.temp)}&deg;F — ${desc}`;
}