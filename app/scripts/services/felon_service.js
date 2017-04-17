var app = angular.module('rtxDemoApp');

app.service('felonService', ['$http',function($http) { 
   return{
        felon_info_yes_is_state_conviction:function(state_code) {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              console.log("county_user_info",user_info)
           var auth_info = user_info.auth_token;
               console.log("felon_counties",auth_info)
               // console.log('call http with object', foodstamps_counties);
                var url_info = 'https://api-qa.retrotax-aci.com/states/' + state_code + '/counties';
              return  $http({
                method: 'GET',
                url: url_info,
                
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
                responseType: 'json'
                });
            }
     };
}]);
