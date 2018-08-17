const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather');


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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`Its currently ${weatherResults.temp} degrees. Summary: ${weatherResults.summary}ly fucking hot.`);
            }
        });
        
    }
});