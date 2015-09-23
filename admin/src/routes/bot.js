var router = require('express').Router();
var mongoose = require('mongoose');
var Bot = require('../models/bot');
var winston = require('winston');

router.get('/getList', function(req, res, next){
  Bot.find().lean().exec(function(err, data){
    if (err) {
      next(err);
  	} else {
    	res.json(data);
  	}
  });
});

router.get('/getInfo', function(req, res, next){
  var id = req.query.id;
  Bot.findById(id).lean().exec(function(err, data){
    if (err) {
      next(err);
  	} else {
    	res.json(data);
  	}
  });
});

module.exports = router;
