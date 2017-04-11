var app = angular.module('rtxDemoApp');

app.service('stateService', ['$http',function($http) { 
 return{
      getStateName:function(states) {
      console.log('call http with object', states);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/states',   
                 data: states,
                headers: { "X-API-KEY": "my states", "Content-Type": "application/json"},
                responseType: 'json'
              });
          }
   }
 


 

}]);










