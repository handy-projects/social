var router = require('express').Router();
var Bot = require('../models/bot');
var winston = require('winston');

var vk = require('../services/vk');

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

router.put('/like', function(req, res, next){
  var model = req.body;

  // validate
  if (!model.botId || !model.itemType || !model.itemURL) {
    res.status(400).end();
    return;
  }

  vk.like(model)
    .then(function(){
      res.end();
    })
    .catch(function(err){
      res.status(500).end();
    });
});

router.put('/repost', function(req, res, next){
  var model = req.body;

  // validate
  if (!model.botId || !model.itemType || !model.itemURL) {
    res.status(400).end();
    return;
  }

  vk.repost(model)
    .then(function(){
      res.end();
    })
    .catch(function(err){
      res.status(500).end();
    });
});

module.exports = router;
