var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var path = require('path');


router.use(express.static('public'));

router.get('/', function (req, res) {
    var tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function (req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find({ name: name });
    res.render('index', { tweets: tweets });
});

router.post('/tweets', function (req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
});

module.exports = router;