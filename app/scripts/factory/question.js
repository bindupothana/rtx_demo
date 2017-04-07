var app = angular.module('rtxDemoApp');
app.factory('questionFactory', function($q, questionService) {
     var factory={};   
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
    factory.saveEmployee = function(employee){
    var employeeList =  JSON.parse(localStorage.getItem('employeeList')); 
    console.log(angular.copy(employeeList));
    if(employeeList == null){
      employeeList = [];
    }
    employeeList.push(employee);

    return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  }
      return factory;



  });




