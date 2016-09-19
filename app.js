var Express = require('express');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');

const logger = volleyball.custom({ debug: true })


var app = new Express();
app.use(logger);

nunjucks.configure('views',{noCache: true}); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


app.use(function (req, res, next) {
    console.log('Hello World');
    next();
});

app.use('/special', function (req, res, next) {
    console.log('Fullstack Academy');
    next();
});

app.get('/', function (req, res, next) {
    //res.send('Hello World!');
    var locals = {
        title: 'An Example',
        people: [
            { name: 'Gandalf'},
            { name: 'Frodo' },
            { name: 'Hermione'}
        ]
    };
    nunjucks.render('index.html', locals, function (err, output) {
        res.render(output);
    });
});

app.get('/special', function (req, res, next) {
    res.send('Fullstack Academy Part 2');
});

app.listen(3000);