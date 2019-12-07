var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Saint-Rivoal,fr&APPID=***REMOVED***&units=metric";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var meteo = request.response;
    var temperature = meteo.main['temp'];
    var textTemp = document.getElementById('general');
    textTemp.innerHTML = "Il fait actuellement " + "<b>"+ temperature + "°C</b>";
    var textConseil = document.getElementById('conseils');
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
    var wind = meteo.wind['speed'];
    wind = Math.round(3600 * wind / 1000);
    var textWind = document.getElementById('wind');
    textWind.innerHTML = "Le vent souffle à " + "<b>"+ wind + "km/h</b>" ;
    var textConseilWind = document.getElementById('conseils-wind');
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
    var rain = meteo.rain['1h'];
    if (rain )
    console.log(rain);

}






