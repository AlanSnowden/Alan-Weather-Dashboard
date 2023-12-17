var APIKey = "3044af28d07ae16075bb3444707b2ab5";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid={API key}" + APIKey; //test if the API key needs to go in the curly braces
console.log(queryURL)

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log()
    })