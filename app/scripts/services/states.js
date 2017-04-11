var app = angular.module('rtxDemoApp');

app.service('stateService', ['$http',function($http) { 
 return{
      getStateName:function(states) {
      console.log('call http with object', states);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/states',   
                 data: states,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": "3ab7ab23793997f5dc47211ff075b5d5ae6eaa1e7b865e1de644b131850cd22c8c9cd628eb96294f77378729bde12106f16b31e1b9035b2d18923e8c5a75206e","Content-Type": "application/json"},
                responseType: 'json'
              });
          }
   }
 


 

}]);










