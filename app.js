const express = require('express');
const app = express();

var port = process.env.PORT || 3000;


app.get('/', function(req, res){
  res.send('Hello!');
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});