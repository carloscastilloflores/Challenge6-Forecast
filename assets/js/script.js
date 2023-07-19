
var searchButton = document.querySelector('#btn-submit');
// var searchInput = document.getElementById('searchInput'); 
var apiKey = "8041e757f86e424b7d819b54bf38516d";  
var searchFormEl = document.querySelector('#search-form');
var cityName = document.querySelector('#searchInput');
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=' + apiKey + "&units=metric";
var getGeo = "https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid=8041e757f86e424b7d819b54bf38516d";
var resultContainer = document.querySelector("#result-container");
var cityContainer = document.querySelector("#city-container");
var forecastContainer = document.querySelector("#forecast");
var forecast1 = document.querySelector("#forecast-1");
var forecast2 = document.querySelector("#forecast-2");
var forecast3 = document.querySelector("#forecast-3");
var forecast4 = document.querySelector("#forecast-4");
var forecast5 = document.querySelector("#forecast-5");
var searchedCities = document.querySelector("#recent-search");

var storedCities = document.getElementById('searchInput');  
var cityData = [];


function handleSearchFormSubmit(event) {
    //
    event.preventDefault();
    var cityName = document.querySelector('#searchInput').value;
    console.log(cityName)
    if (!cityName) {
    console.error('You need a search something');
    return;
    }
    getLat();
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);{

}
/*
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("button Works!");
    console.log(cityName.value);
    getLat();
});
*/
function getLat() {
    var url = getGeo.replace('{city}', encodeURIComponent(cityName.value));
 
    fetch(url)
    .then(function (response) {
        return response.json(); 
    })
    .then(function(data){
        console.log(data)
        console.log(data[0].lat, data[0].lon)
        var lat = data[0].lat; 
        var lon = data[0].lon;
    getApi(lat,lon);
    })};


function getApi(lat, lon) {
    var url = apiUrl.replace('{city}', encodeURIComponent(cityName)).replace('{lat}', lat).replace('{lon}', lon);

  fetch(url)
      .then(function (response) {
        return response.json(); 
      })
      .then(function(data){
        console.log(data)
        
        displayApi(data);
        saveCity(data);
      })};

function displayApi(data) {
    cityContainer.innerHTML = "";
    forecast1.innerHTML = "";
    forecast2.innerHTML = "";
    forecast3.innerHTML = "";
    forecast4.innerHTML = "";
    forecast5.innerHTML = "";
  //  resultContainer.innerHTML = "";
   // if (cityContainer.querySelectorAll('*').length > 4) {
    //    cleanPage();
    //}
   /*if (cityContainer.value > 2) {
    console.log(cityData);
    }*/


    console.log(data.city.name, data.list[0].main.temp, data.list[0].main.humidity, data.list[0].wind.speed);


    var resultName = document.createElement('h2');
    resultName.textContent = data.city.name + " " + data.list[0].dt_txt;
    cityContainer.append(resultName);

    var resultTemp = document.createElement('p');
    resultTemp.textContent = "Temperature: " + data.list[0].main.temp + "ºC";
    cityContainer.append(resultTemp);

    var resultWind = document.createElement('p');
    resultWind.textContent = "Wind: " +  data.list[0].wind.speed + " MPH";
    cityContainer.append(resultWind);

    var resultHumidity = document.createElement('p');
    resultHumidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
    cityContainer.append(resultHumidity);

    // Forecast 

    var date1 = document.createElement('h4')
    date1.textContent = data.list[12].dt_txt;
    forecast1.append(date1);

    var temp1 = document.createElement ('p');
    temp1.textContent = "Temperature: " + data.list[12].main.temp + "ºC";
    forecast1.append(temp1);

    var wind1 = document.createElement ('p');
    wind1.textContent = "Wind: " +  data.list[12].wind.speed + " MPH";
    forecast1.append(wind1);

    var humidity1 = document.createElement('p');
    humidity1.textContent = "Humidity: " + data.list[12].main.humidity + "%";
    forecast1.append(humidity1);

    // Second day 

    var date2 = document.createElement('h4')
    date2.textContent = data.list[19].dt_txt;
    forecast2.append(date2);

    var temp2 = document.createElement ('p');
    temp2.textContent = "Temperature: " + data.list[19].main.temp + "ºC";
    forecast2.append(temp2);

    var wind2 = document.createElement ('p');
    wind2.textContent = "Wind: " +  data.list[19].wind.speed + " MPH";
    forecast2.append(wind2);

    var humidity2 = document.createElement('p');
    humidity2.textContent = "Humidity: " + data.list[19].main.humidity + "%";
    forecast2.append(humidity2);

    // Third day 

    var date3 = document.createElement('h4')
    date3.textContent = data.list[26].dt_txt;
    forecast3.append(date3);

    var temp3 = document.createElement ('p');
    temp3.textContent = "Temperature: " + data.list[26].main.temp + "ºC";
    forecast3.append(temp3);

    var wind3 = document.createElement ('p');
    wind3.textContent = "Wind: " +  data.list[26].wind.speed + " MPH";
    forecast3.append(wind3);

    var humidity3 = document.createElement('p');
    humidity3.textContent = "Humidity: " + data.list[26].main.humidity + "%";
    forecast3.append(humidity3);

    // fourth day 

    var date4 = document.createElement('h4')
    date4.textContent = data.list[32].dt_txt;
    forecast4.append(date4);

    var temp4 = document.createElement ('p');
    temp4.textContent = "Temperature: " + data.list[32].main.temp + "ºC";
    forecast4.append(temp4);

    var wind4 = document.createElement ('p');
    wind4.textContent = "Wind: " +  data.list[32].wind.speed + " MPH";
    forecast4.append(wind4);

    var humidity4 = document.createElement('p');
    humidity4.textContent = "Humidity: " + data.list[32].main.humidity + "%";
    forecast4.append(humidity4);

    //fifth day 

    var date5 = document.createElement('h4')
    date5.textContent = data.list[39].dt_txt;
    forecast5.append(date5);

    var temp5 = document.createElement ('p');
    temp5.textContent = "Temperature: " + data.list[39].main.temp + "ºC";
    forecast5.append(temp5);

    var wind5 = document.createElement ('p');
    wind5.textContent = "Wind: " +  data.list[39].wind.speed + " MPH";
    forecast5.append(wind5);

    var humidity5 = document.createElement('p');
    humidity5.textContent = "Humidity: " + data.list[39].main.humidity + "%";
    forecast5.append(humidity5);

}

function saveCity(data) {
    var cityData = {
        cityName: cityName.value
      }

    var storedCities = JSON.parse(localStorage.getItem("cityData"));
    localStorage.setItem("cityData", JSON.stringify(storedCities));

    if (!storedCities){
        storedCities = []; // create an empty array if storedData is null or undefined
    }
    if (Array.isArray(storedCities)) {
        storedCities.push(cityData);
        } else {
        storedCities = [cityData];
        }
    if (storedCities) {
        for (var i = 0; i < storedCities.length; i++) {
        
            var searchedCity = document.createElement("button");
            searchedCity.textContent = storedCities[i++].cityName; 
            searchedCities.appendChild(searchedCity);
          //  searchedCity.classList.add('btn-recent');
        }}
        /*
        var searchedCity = document.createElement('button');
        searchedCity.textContent = storedCities[0].cityName;
        localStorage.setItem("cityData", JSON.stringify(storedCities));
        searchedCities.appendchild(searchedCity);*/
        
}
    /*

function cleanPage() {
    var resultContainer = document.querySelector(".result-container");
    resultContainer.innerHTML = " ";
}
var elements = document.getElementsByClassName('result-container');
    while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
    }
    Option 2 
     if (cityContainer.querySelectorAll('*').length === ) {
        cleanPage();
    }
    if (cityContainer.querySelectorAll('*').length === ) {
        cleanPage();
    }



document.getElementsByClassName('search-container').remove();
    */


