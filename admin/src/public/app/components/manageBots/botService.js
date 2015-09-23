angular.module('sa.manageBots')
  .service('botService', ['$http', '$q', function ($http, $q){

    this.getBots = function(){
      var deferred = $q.defer();

      $http.get('/api/bots/getList')
        .then(function(res){
          deferred.resolve(res.data);
        })
        .catch(function(err){
          deferred.reject(err);
        });

      return deferred.promise;
    };

    this.getBotInfo = function(id) {
      var deferred = $q.defer();

      $http.get('/api/bots/getInfo?id='+id)
        .then(function(res){
          deferred.resolve(res.data);
        })
        .catch(function(err){
          deferred.reject(err);
        });

      return deferred.promise;
    };

    this.like = function(botId, itemURL, itemType) {
      var deferred = $q.defer();

      deferred.resolve();

      return deferred.promise;
    };

    this.repost = function(botId, itemURL, itemType) {
      var deferred = $q.defer();

      deferred.resolve();
      
      return deferred.promise;
    };
  }]);
