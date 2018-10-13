var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
var _ = require('underscore');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
var TruckSchema = mongoose.Schema({
    name: String
});

  router.get('/search', function(req, res, next) {
    res.render('search', { 
      title: 'Search a project',
      data: [],
      checkinput: true
    });
  });

});

module.exports = router;
