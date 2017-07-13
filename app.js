const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');
const app = express();


var port = process.env.PORT || 3000;


app.use(volleyball);

/*
app.use(function(req, res, next) {
  console.log(chalk.blue(req.method + ' ' + req.url + ' ' + res.statusCode));
  next();
});
*/

app.use('/special/', function(req, res, next){
  console.log('special area');
});

app.get('/', function(req, res){
  res.send('Hello!');
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
