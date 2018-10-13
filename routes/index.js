var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Moving Packaging - Home',
      page: 'Home'
        });
  });
});
module.exports = router;
