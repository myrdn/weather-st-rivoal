//OpenWeatherMap API call
const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Saint-Rivoal,fr&APPID=***REMOVED***&units=metric";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//Function for temperature
function temp() {
    const temperature = meteo.main['temp'];
    const textTemp = document.getElementById('general');
    textTemp.innerHTML = `Il fait actuellement <b>${temperature}°C</b>`;
    const textConseil = document.getElementById('conseils');
    if (temperature <= 0) {
        textConseil.innerHTML = "Il gèle rentre ta verveine";
    } else if (temperature <= 6) {
        textConseil.innerHTML = "Ça caille !";
    } else if (temperature <= 12) {
        textConseil.innerHTML = "Prends ton bonnet si tu vas te balader sur les crêtes."
    } else if (temperature <= 15) {
        textConseil.innerHTML = "Mieux vaut garder ta veste pour grimper au Menez Mikael";
    } else if (temperature > 15) {
        textConseil.innerHTML = "Un tour du Drennec en t-shirt ?";
    } else if (temperature > 20) {
        textConseil.innerHTML = "En voiture direction la plage !";
    }
}

//Function for wind speed
function windy() {
    let wind = meteo.wind['speed'];
    wind = Math.round(3600 * wind / 1000);
    const textWind = document.getElementById('wind');
    textWind.innerHTML = `Le vent souffle à <b>${wind}km/h</b>`;
    const textConseilWind = document.getElementById('conseils-wind');
    if (wind == 0) {
        textConseilWind.innerHTML = "Pas un brin de vent!";
    } else if (wind <= 20) {
        textConseilWind.innerHTML = "Tu ne risques pas de t'envoler!";
    } else if (wind <= 40) {
        textConseilWind.innerHTML = "Regardes les branches s'agiter...";
    } else if (wind <= 70) {
        textConseilWind.innerHTML = "Attention aux branches sur la route !";
    } else if (wind > 70) {
        textConseilWind.innerHTML = "C'est la tempête !";
    }
}

//Function for rain precipitations
function precipitation() {
    const textRain = document.getElementById('rain');
    const textConseilRain = document.getElementById('conseils-rain');
    if (meteo.rain !== undefined) {
        const rain = meteo.rain['3h'];
        textRain.innerHTML = `${rain} mm de pluie sont tombés`;
        if (rain <= 3) {
            textConseilRain.innerHTML = "Bon il faut prendre un imperméable";
        } else if (rain <= 7) {
            textConseilRain.innerHTML = "T'as un parapluie ?";
        } else if (rain >= 8) {
            textConseilRain.innerHTML = "C'est le déluge";
        }
    } else {
        textRain.innerHTML = "Pas de pluie !";
        textConseilRain.innerHTML = "On apprécie.";
    }
}

//Main function
request.onload = () => {
    meteo = request.response;
    temp();
    windy();
    precipitation();
}

//Visibilize hidden elements
function visibilize() {
    const element = document.getElementById("anchor");
    element.scrollIntoView({ behavior: "smooth" });
}

//Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//For loop bubbles
const bubbles = document.querySelectorAll(".bubble");

for (let i = 0; i < bubbles.length; i++){
el = bubbles[i];
console.log(el);
}

function checkAndGo() {
    if (isElementInViewport(el));
    else {
        for (let i = 0; i < bubbles.length; i++) {
        el.setAttribute("id", "anchor");
        };
        console.log(el);
        visibilize();
    }
} 

setTimeout(() => { checkAndGo(); }, 2900);