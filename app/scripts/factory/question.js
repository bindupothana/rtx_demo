var app = angular.module('rtxDemoApp');
app.factory('questionFactory', function($q, questionService) {
     var factory={}; 
     var yesMap = {};
  
     factory.getquestionFactory = function() {
     var deferred = $q.defer();
       questionService.getQuestion().then(function(resp) {  

       deferred.resolve(resp.data);
     },
       function(errorInfo) {
           deferred.reject([]);
        });
      return deferred.promise;
      }
  
      return factory;



  });




