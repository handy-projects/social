var vkApi = require('vk-dirty-api');

var credentials = {
    client_id: 0 // appid,
    login:     'email', // could be phone number as well
    pass:      'pass'
};

var vk = new vkApi(
    credentials,
    function (err, access_token) {
        if(err)
            return console.error('Unable to authenticate', err);
        console.log('Successfully authenticated / access_token:', access_token);
    });

vk.on('auth', function (token) {
    vk.api('users.get', { user_ids: 1 }, function (err, info) {
        if(err)
            return console.error('Unable to complete request', err);
        console.log(info);
    });

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
});

vk.on('error', function (err) {
  console.dir(err);
    // do authentication fail related stuff...
});
