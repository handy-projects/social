var $q = require('q');
var path = require('path');
var Bot = require(path.resolve('models/bot'));
var vkApi = require('vk-api-node-wrapper');
var keys = require(path.resolve('keys'));
var winston = require('winston');
var vkUrlParser = require(path.resolve(__dirname, 'urlParser'));

var service = new function() {
  var self = this;

  this.like = function(args) {
    ///
    /// Steps:
    /// 1. Find bot by id
    /// 2. Check state
    /// 3. Like item
    /// 4. Resolve

    var botId, itemType, itemURL;

    botId = args.botId;
    itemType = args.itemType;
    itemURL = args.itemURL;

    var deferred = $q.defer();

    function _error(err) {
      winston.debug('Error in vk service: like() - ' + err);
      deferred.reject(err);
    };

    function _success(res) {
      winston.debug('Success: like()');
      deferred.resolve(res);
    };

    Bot.findById(botId)
      .exec(function(err, data){
        if (err) {
          _error(err);
          return;
        }

        var bot = data;

        if (!bot.access_token || !bot.access_token.length) {
          _error(new Error('Bot #'+bot.id+' has no access_token'));
          return;
        }

        var vkClient = new vkApi({
          client_id: keys.vk_app_id,
          ua: keys.ua,
          access_token: bot.access_token
        });

        var parsedUrl = vkUrlParser.parse(itemType, itemURL);
        if (parsedUrl.err) {
          _error(parsedUrl.err);
          return;
        }

        //console.dir(parsedUrl);

        vkClient.api('likes.add', {
           type: itemType,
           owner_id: parsedUrl.data.ownerId,
           item_id: parsedUrl.data.itemId
         }, function(err, res) {
           if (err) {
             _error(err);
             return;
           }

          _success();
         });
      });

    return deferred.promise;
  };

  this.repost = function(args) {

    ///
    /// Steps:
    /// 1. Find bot by id
    /// 2. Check state
    /// 3. Repost item
    /// 4. Resolve

    var botId, itemType, itemURL;

    botId = args.botId;
    itemType = args.itemType;
    itemURL = args.itemURL;

    var deferred = $q.defer();

    function _error(err) {
      winston.debug('Error in vk service: repost() - ' + err);
      deferred.reject(err);
    };

    function _success(res) {
      winston.debug('Success: repost()');
      deferred.resolve(res);
    };

    Bot.findById(botId)
      .exec(function(err, data){
        if (err) {
          _error(err);
          return;
        }

        var bot = data;

        if (!bot.access_token || !bot.access_token.length) {
          _error(new Error('Bot #'+bot.id+' has no access_token'));
          return;
        }

        var vkClient = new vkApi({
          client_id: keys.vk_app_id,
          ua: keys.ua,
          access_token: bot.access_token
        });

        var parsedUrl = vkUrlParser.parse(itemType, itemURL);
        if (parsedUrl.err) {
          _error(parsedUrl.err);
          return;
        }

        //console.dir(parsedUrl);

        // https://vk.com/nsc?w=wall-25530938_19228
        vkClient.api('wall.repost', {
           object: parsedUrl.data.object,
           message: ''
         }, function(err, res) {
           if (err) {
             _error(err);
             return;
           }

          _success();
         });
      });

    return deferred.promise;
  };
};

module.exports = service;
