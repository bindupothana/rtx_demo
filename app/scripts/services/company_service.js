var app = angular.module('rtxDemoApp');

app.service('companyService', ['$http',function($http) { 
 return{
      getCompanies:function(companies) {
          var user_info = JSON.parse(localStorage.getItem('user_info'));
           console.log("companies",user_info)
          var auth_info = user_info.auth_token;
           console.log("companies",auth_info)
           console.log('call http with object', companies);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/companies',   
                 data: companies,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": "9531f7dab6a0d0a0a36734633840466c2cda497f0a31672372b46ed041d931c4227f49d7773583d01b704c3df4df4550ed7b9f92fd277f7cd619208992ed7c3a","Content-Type": "application/json"},
               responseType: 'json'
          });
      }
  }
 
}]);






