var app = angular.module('rtxDemoApp');

app.service('companyService', ['$http',function($http) { 
 return{
      getCompanies:function(companies) {
          var user_info = JSON.parse(localStorage.getItem('user_info'));
           console.log("company_user_info",user_info)
          var auth_info = user_info.auth_token;
           // console.log(user_info[0].auth_token)
           console.log('call http with object', companies);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/companies',   
                 data: companies,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
               responseType: 'json'
          });
      }
  }
 
}]);






