// require modules
var express = require("express");

var path = require("path");

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var validator = require('express-validator');
app.use(validator());

var session = require('express-session')
app.use(session({
	secret: '123',
	resave: false,
	saveUninitialized: true
}))
	
require('./server/config/sql.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

var server = app.listen(8000, function() {
    console.log("Port number: 8000");
});