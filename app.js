var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var env = process.env.NODE_ENV || "development";
var es = require('elasticsearch');
var client = null;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


if (env === 'development') {
    client = new es.Client({
        host: "http://localhost:9200/"
    });
} else {
    client = new es.Client({
        host: process.env.BONSAI_URL
    });
}

app.use('/api', api);

module.exports = app;
