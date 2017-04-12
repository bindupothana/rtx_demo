var app = angular.module('rtxDemoApp');

app.service('countyService', ['$http',function($http) {   
  return{
       getCounty:function(counties) {
       console.log('call http with object', counties);
       return  $http({
                method: 'GET',
                url: 'https://api-qa.retrotax-aci.com/states/state_code/counties'    
               
                headers: { "X-API-KEY": "my counties", "Content-Type": "application/json"},
                responseType: 'json'
              });
          }
        }
}]);





