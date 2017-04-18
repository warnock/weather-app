var apiKey = require('./../.env').apiKey;

Weather = function() {

};

Weather.prototype.getWeather = function(zip, humidity, temperature) {
  $.get('api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=' + apiKey).then(function(response) {
    console.log(response);
    displayHumidity(city, response.main.humidity);
    displayTemperature(city, response.main.temperature);
  }).fail(function(error) {
      $('showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
