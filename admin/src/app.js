var express = require('express');
var cluster = require( 'cluster' );
var cCPUs = require('os').cpus().length;
var redis = require('redis');
var cache = redis.createClient();
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
var passport = require('passport');

var logger = require('./logger');
var morgan = require('morgan');

//var favicon = require('serve-favicon');

process.on('uncaughtException', function (err) {
  logger.error(err.stack);
});

if (cluster.isMaster){
  for(var i=0; i<cCPUs; i++){
    cluster.fork();
  }

  cluster.on('online', function(worker){
    logger.info('Worker #'+ worker.process.pid +' online');
  });

  cluster.on('exit', function(worker, code, signal){
    logger.info('Worker #'+ worker.process.pid +' died, code: '+code + ', signal: '+signal);
  });
} else{
  require('./db')(_startWorker);
}

function _startWorker(){
  var app = express();
  app.set('views', './public');
  app.set('view engine', 'ejs');
  app.disable('x-powered-by');
  app.engine('html', require('ejs').renderFile);

  var winstonStream = {
    write: function(message, encoding){
      logger.info(message);
    }
  };

  // serve favicon
  //app.use(favicon(__dirname + '/public/favicon.ico'));

  // serve static files
  app.use(express.static('public'));

  app.use(morgan('combined',{ "stream": winstonStream}));

  app.use(session({
    store: new RedisStore(),
    secret: 'HereWeGoAgain2!1Teh',
    resave: false,
    saveUninitialized: false
  }));

  /*app.use(function(req, res, next){
    var ua = req.headers['user-agent'];
    cache.zadd('online', Date.now(), ua, next);
  });*/

  /*app.use(function(req, res, next){
    var min = 60 * 1000;
    var ago = Date.now() - min;
    cache.zrevrangebyscore('online', '+inf', ago, function(err, users){
      if (err) return next(err);
      req.online = users;
      next();
    });
  });*/

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());
  require('./auth');
  //require('./helpers')(app);
  require('./routes')(app);
  //require('./services');
  var server = app.listen(3000, function(){
    logger.info('Listening on port %d', server.address().port);
  });
};
