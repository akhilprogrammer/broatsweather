const request = require('request');

const getWeatherData = function(location, callback) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=416d7ccb6bef559dae1d0bdb6b4c9d69`;


    request(url, (err, res) => {
        if(err) {
            callback({
                error: 'Ooops!!! Network Error'
            });
        }
        else if(JSON.parse(res.body).cod === '404') {
            callback({
                error: JSON.parse(res.body).message
            });
        }
        else {
            const data = JSON.parse(res.body);
            callback(
                {
                    error: '',
                    message: `
    place       : ${data.name}
    temp        : ${data.main.temp}
    press       : ${data.main.pressure}
    humidity    : ${data.main.humidity}
    wind speed  : ${data.wind.speed} 
                                            
                    `
                }
            );
        }
    });

}

module.exports = getWeatherData;