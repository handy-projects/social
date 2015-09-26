var router = require('express').Router();
var mongoose = require('mongoose');
var Bot = require('../models/bot');
var winston = require('winston');
var vkApi = require('vk-api-node-wrapper');
var keys = require('../keys');

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

  Bot.findById(model.botId).exec(function(err, data){
    if (err) {
      next(err);
    } else {
      var bot = data;

      if (!bot.access_token) {
        next(new Error("Bot #"+bot._id+" has no access token"));
      } else {
        var vk = new vkApi({
          client_id: keys.vk_app_id,
          ua: keys.ua,
          access_token: bot.access_token
        });

        // like photo get owner and photo id from url
        // https://vk.com/lionheartinside?z=photo6623021_380222338%2Falbum6623021_161589565%2Frev
        // owner_id = 6623021
        // photo_id = 380222338
        vk.api('likes.add', {type: 'photo', owner_id: 6623021, item_id: 380222338}, function(err, re) {
          if (err) {
            console.dir(err);
          }

          console.dir(re);
          res.end();
        });
        /*vk = new vkApi(
          {
              client_id: keys.vk_app_id,
              login: bot.login,
              pass: bot.password
          });

        vk.auth(function (err, access_token) {
            if(err)
                return console.error('Unable to authenticate', err);
            console.log('Successfully authenticated / access_token:', access_token);

            res.end();
        });*/

      }
    }
  });



  res.json({});
});

router.put('/repost', function(req, res, next){
  var model = req.body;
  console.dir(model);
  res.json({});
});

module.exports = router;
