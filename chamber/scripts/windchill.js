const temperature = document.getElementById('temp');
const wind = document.getElementById('windspeed');
const airTemp = temperature.innerHTML;
const windSpeed = wind.innerHTML;

// let airTemp = 20;
// let windSpeed = 10;

function calculate(airTemp, windSpeed) {
    if (airTemp <= 50 && windSpeed > 3.0) {
        let windChill = (35.74 + .6215 * airTemp - 35.75 * windSpeed ** 0.16 + 
            .4275 * airTemp * windSpeed ** 0.16);
        return windChill.toFixed(0);
    } else {
        return 'N/A';
    };
};

document.getElementById('feelsLike').innerHTML = calculate(airTemp, windSpeed);