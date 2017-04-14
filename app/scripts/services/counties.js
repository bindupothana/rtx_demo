



var app = angular.module('rtxDemoApp');

app.service('countyService', ['$http',function($http) { 
   return{
        getCounty:function(counties) {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              // console.log("service_user_info",user_info)
           var auth_info = user_info.auth_token;
               console.log("ksjdfgkhg",auth_info)
               console.log('call http with object', counties);
    return  $http({
                method: 'GET',
              url: 'https://api-qa.retrotax-aci.com/states/{state_code}/counties',   
                data: counties,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": "auth_info","Content-Type": "application/json"},
                responseType: 'json'
                });
            }
     }
 
}]);