const yargs = require('yargs');
const axios = require('axios');

// options when -h flag
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
        // This tell yargs to always parse a / address as a string, 
        //as opposed to a number or boolean 
        // Setting string to true makes sure get that data from user
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
const apiKey = 'AIzaSyB8xWe8knH77VM6ZdlFfTAVY3wUmycEiaw';
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

axios.get(geocodeUrl).then((res)=>{
    if(res.data.status === 'ZERO_RESULTS'){
        throw new Error('Undable to find address');
    }
    var lat = res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/aba5546a26cfc99b15a08b0538c70688/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((res)=>{
    var temperature = res.data.currently.temperature;
    var apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}`)
}).catch((e)=>{
    if(e.code === "ENOTFOUND"){
        console.log('undable to connect to api servers')
    }else{
        console.log(e.message);
    }
})