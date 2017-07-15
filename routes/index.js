const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io) {

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
  console.log(tweets);
});

router.get('/users/:name', function(req, res){
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render('index', {tweets: list, showForm: true, person: name});
});

router.get('/tweets/:id', function(req, res){
  var id = req.params.id;
  var list = tweetBank.find({id: Number(id)});
  res.render('index', {tweets: list});
});

router.post('/tweets', function(req, res){
  var name = req.body.name;
  var content = req.body.text;
  tweetBank.add(name, content);

  var newTweet = tweetBank.find({name: name});
  io.sockets.emit('newTweet', {newTweet});
  //res.redirect('/');
});

  return router;
}
