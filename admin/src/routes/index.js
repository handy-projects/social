var winston = require('winston');
var bot = require('./bot');

module.exports = function(app){

  winston.info('Routes init started');

  app.use('/api/bots', bot);

  // in other cases always return index.html
  app.get('*', function(req, res) {
    res.render("index.html");
  });

  winston.info('Routes init done');
};
