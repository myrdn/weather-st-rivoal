# weather-st-rivoal

A webpage with weather forecast for my village Saint-Rivoal, FR.

Please provide your own OpenWeatherMap API key adding this file with your personal API key to the project :

```js
//assets/js/apicall.js
//OpenWeatherMap API call
const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Saint-Rivoal,fr&APPID=YOURAPIKEY&units=metric";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
```  
</br>

![alt text](screenshot.png)
