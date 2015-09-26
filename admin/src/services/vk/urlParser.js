var winston = require('winston');
var url = require('url');

var parser = new function() {
  var self = this;

  this.parse = function(itemType, itemURL) {
    // parse url depending on type
    // return err, and {ownerId, itemId}
    var res = {
      err: null,
      data: {}
    };

    switch (itemType) {
      case 'photo':
        // https://vk.com/lionheartinside?z=photo6623021_380222338%2Falbum6623021_161589565%2Frev
        // 6623021 - ownerId
        // 380222338 - itemId
        var _u = url.parse(itemURL, true);
        // console.dir(_u);
        // split by _ and /
        var query = _u.query.z.split(/[_/]+/);
        var ownerId = query[0].substr(5, query[0].length);
        var itemId = query[1];
        res.data = {
          ownerId: parseInt(ownerId),
          itemId: parseInt(itemId)
        };
        break;

      case 'wallpost':
        // https://vk.com/nsc?w=wall-25530938_19228
        // wall-25530938_19228 - object
        var _u = url.parse(itemURL, true);
        res.data = {
          object: _u.query.w
        };
        break;
      default:
        res.err = new Error('URL type: ' + itemType + ' can\'t be parsed');
    }

    return res;
  };
};

module.exports = parser;
