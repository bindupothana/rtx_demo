var app = angular.module('rtxDemoApp');

app.service('loginService', ['$http',function($http) {

 
   


   return{
      postName:function(credentials) {
      console.log('call http with object', credentials);
      return  $http({
                method: 'POST',
                url: 'https://api-qa.retrotax-aci.com/authentication',
                data: credentials,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "Content-Type": "application/json"},
                responseType: 'json'
              });
          }
   }

 return{
      stateName:function(states) {
      console.log('call http with object', states);
      return  $http({
                method: 'POST',
                url: ' https://api-qa.retrotax-aci.com/states',
                data: states,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "Content-Type": "application/json"},
                responseType: 'json'
              });
          }
   }


}]);





