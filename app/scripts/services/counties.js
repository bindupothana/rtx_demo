var app = angular.module('rtxDemoApp');

app.service('countyService', ['$http',function($http) {   
  return{
       getCounty:function(counties) {
       console.log('call http with object', counties);
       return  $http({
                method: 'GET',
                url: 'https://api-qa.retrotax-aci.com/states/{state_code}/counties'    
               
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "Content-Type": "application/json"},
                responseType: 'json'
              });
          }
        }
}]);





