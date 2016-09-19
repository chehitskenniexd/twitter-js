var Express = require('express');
var volleyball = require('volleyball');
const logger = volleyball.custom({ debug: true })


var app = new Express();
app.use(logger);

app.use(function (req, res, next) {
    console.log('Hello World');
    next();
});

app.use('/special', function (req, res, next) {
    console.log('Fullstack Academy');
    next();
});

app.get('/', function (req, res, next) {
    res.send('Hello World!');
});

app.get('/special', function (req, res, next) {
    res.send('Fullstack Academy Part 2');
});

app.listen(3000);