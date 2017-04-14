var app = angular.module('rtxDemoApp');

app.service('locationService', ['$http',function($http) { 
   return{
        getLocation:function(location) {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              console.log("location_user_info",user_info)
           var auth_info = user_info.auth_token;
               console.log("locations",auth_info)
               console.log('call http with object', location);
    return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com//companies/{company_id}/locations',   
                data: states,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
                responseType: 'json'
                });
            }
     }
 
}]);