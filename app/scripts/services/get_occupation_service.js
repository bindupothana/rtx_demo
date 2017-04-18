var app = angular.module('rtxDemoApp');

app.service('occupationService', ['$http',function($http) { 
   return{
      getOccupation:function(occupation) {
          var user_info = JSON.parse(localStorage.getItem('user_info'));
           console.log("company_user_info",user_info)
          var auth_info = user_info.auth_token;
           // console.log(user_info[0].auth_token)
           console.log('call http with object', occupation);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/occupations',   
                 data: occupation,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
               responseType: 'json'
          });
      }
  }
 
}]);
