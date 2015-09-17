var vkApi = require('vk-dirty-api');
var keys = require('./keys');

var credentials = {
    client_id: keys.app_id, // appid,
    login:     keys.login, // could be phone number as well
    pass:      keys.pass
};

var vk = new vkApi(
    credentials,
    function (err, access_token) {
        if(err)
            return console.error('Unable to authenticate', err);
        console.log('Successfully authenticated / access_token:', access_token);
    });

vk.on('auth', function (token) {

  function getUsers() {
    vk.api('users.get', { user_ids: 1 }, function (err, info) {
          if(err)
              return console.error('Unable to complete request', err);
          console.log(info);
      });
  };

  function addLike() {
    // like photo get owner and photo id from url
    // https://vk.com/lionheartinside?z=photo6623021_380222338%2Falbum6623021_161589565%2Frev
    // owner_id = 6623021
    // photo_id = 380222338
    vk.api('likes.add', {type: 'photo', owner_id: 6623021, item_id: 380222338}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });
  }

  function repost() {
    vk.api('wall.repost', {object: 'wall-98093993_3741', message: 'test'}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });
  };

  function getWallPosts() {
    vk.api('wall.get', {owner_id: 323755741}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });
  };


    /*vk.api('likes.add', {type: 'post', owner_id: 98093993, item_id: 9}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });*/

    // url https://vk.com/snapster?w=wall-98093993_9
    //
    vk.api('wall.getById', {posts: '-98093993_9'}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });

    // in order to like post with url like: https://vk.com/snapster?w=wall-98093993_9
    // use it
    vk.api('likes.add', {type: 'post', owner_id: -98093993, item_id: 9}, function(err, res) {
      if (err) {
        console.dir(err);
      }

      console.dir(res);

    });







});

vk.on('error', function (err) {
  console.dir(err);
    // do authentication fail related stuff...
});
