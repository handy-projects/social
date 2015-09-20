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

  }]);
