var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Saint-Rivoal,fr&APPID=***REMOVED***&units=metric";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var meteo = request.response;
    var temperature = meteo.main['temp'];
    var texteTemp = document.getElementById('general');
    texteTemp.innerHTML = "Il fait actuellement " + "<b>"+ temperature + "°C</b>";
    var texteConseil = document.getElementById("conseils");
    if (temperature <= 0) {
        texteConseil.innerHTML = "Il gèle rentre ta verveine";
    } else if (temperature <= 12) {
        texteConseil.innerHTML = "Prends ton bonnet si tu vas te balader sur les crêtes."
    } else if (temperature <= 15) {
        texteConseil.innerHTML = "Mieux vaut garder ta veste pour grimper au Menez Mikael";
    } else if (temperature > 15) {
        texteConseil.innerHTML = "Un tour du Drennec en t-shirt ?";
    } else if (temperature > 20) {
        texteConseil.innerHTML = "En voiture direction la plage !";
    }

}






