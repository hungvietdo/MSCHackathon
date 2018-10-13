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

  router.get('/create', function(req, res, next) {
    res.render('create', { 
      title: 'Create a new move project',
      data: [],
      checkinput: true
    });
  });

});

module.exports = router;
