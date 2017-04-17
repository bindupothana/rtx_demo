var app = angular.module('rtxDemoApp');

app.service('countyService', ['$http',function($http) { 
   return{
        get_afdc_recipient_info_county_received:function(state_code) {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              console.log("county_user_info",user_info)
            var auth_info = user_info.auth_token;
               console.log("afdc_counties",auth_info)
               // console.log('call http with object', afdc_counties);
            var url_info = 'http://api-qa.retrotax-aci.com/states/' + state_code + '/counties';
              return  $http({
                  method: 'GET',
                  url: url_info,
                  headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
                  responseType: 'json'
                  });
            }
     }




     return{
        foodstamps_recipient_info_county_received:function() {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              console.log("county_user_info",user_info)
           var auth_info = user_info.auth_token;
               console.log("foodstamps_counties",auth_info)
               // console.log('call http with object', foodstamps_counties);
              return  $http({
                method: 'GET',
                url: 'http://api-qa.retrotax-aci.com/states/'+state_code+'/counties',
                
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
                responseType: 'json'
                });
            }
     }

     return{
        felon_info_yes_is_state_conviction:function() {
           var user_info = JSON.parse(localStorage.getItem('user_info'));
              console.log("county_user_info",user_info)
           var auth_info = user_info.auth_token;
               console.log("foodstamps_counties",auth_info)
               // console.log('call http with object', foodstamps_counties);
              return  $http({
                method: 'GET',
                url: 'http://api-qa.retrotax-aci.com/states/'+state_code+'/counties',
               
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
                responseType: 'json'
                });
            }
     }
 
 
}]);