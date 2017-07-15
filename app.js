const express = require('express');
const nunjucks = require('nunjucks');
const chalk = require('chalk');
const volleyball = require('volleyball');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const socketio = require('socket.io');
var port = process.env.PORT || 3000;

var server = app.listen(port);
var io = socketio.listen(server);


// alwasy search html files
app.set('view engine', 'html');
// i want html rendered by nunjucks.render
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(volleyball);
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes(io));

