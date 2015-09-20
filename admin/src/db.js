var logger = require('./logger');
var mongoose = require('mongoose');

module.exports = function(onDbConnected){
  logger.info('Connecting to social db');
  var conn = mongoose.connect('mongodb://localhost/social', function(err){
  	if (err){
      logger.error('Connection failed to social db');
  	} else {
      logger.info('Connected to social db');
      onDbConnected();
  	}
  });

  mongoose.connection.on('error', function(err){
    logger.error('DB ERROR: '+err);
  });
};
