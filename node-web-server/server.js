const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// Registering middleware // Logger
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log')
        }
    });
    next();
});

// Doesnt call next so the other handlers will never get executed 
app.use((req, res, next) => {
    res.render('maint.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');
    res.render('home.hbs', {
        pageTitle: 'Homepage',
        welcomeMsg: "sup homes"

    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About pages'
    });

});



app.get('/bad', (req, res) => {
    res.send({
        error: 'error terrible'

    })
});

app.listen(3000);