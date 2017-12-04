'use strict';
var express = require('express');
var nunjucks  = require('nunjucks');
var path = require('path');
require('dotenv').load();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express()

/*Set global varibale for views*/
global.env = process.env;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
//app.set('view engine', 'html')
nunjucks.configure('app/views', {
  autoescape: true,
  express   : app
});

/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

//configuration
mongoose.connect(configDB.url,{ useMongoClient: true }); // connect to our database

 // routes ======================================================================
require('./config/routes.js')(app); // load our routes and pass in our app

app.listen(port)
console.log('The listen port is ' + port);
//catch 404 and forward to error handler
app.use(function (req, res, next) 
{	
    //console.log(req.session.user);
    res.status(404).render('errors/404.html', {title: "Sorry, page not found"});
});

app.use(function (req, res, next) {
	
	console.log("Yes 1");
    res.status(500).render('errors/404.html', {title: "Sorry, page not found"});
});
exports = module.exports = app;