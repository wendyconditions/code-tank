const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=555%20lombard%20st%20los%20angeles%20california&key=AIzaSyBHcPg3Tg2LWoOlQeQffRymOxgcJyy26IE',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
})