const request = require('request');

var getWeather = (lat, lng, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/aba5546a26cfc99b15a08b0538c70688/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temp: body.currently.temperature,
                summary: body.currently.summary
            });
        } else {
            callback('unable to fetch weather');
        }
    })
}

module.exports.getWeather = getWeather;