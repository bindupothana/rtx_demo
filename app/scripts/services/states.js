var app = angular.module('rtxDemoApp');

app.service('stateService', ['$http',function($http) { 
 return{
      getStateName:function(states) {
       //  var storeData=JSON.parse(localStorage.getItem('storeData'));
        
       // console.log("storedata",JSON.parse(localStorage.getItem('storeData')));
   var user_info = JSON.parse(localStorage.getItem('user_info'));
       console.log("service_user_info",user_info)
        var auth_info = user_info.auth_token;
        console.log("ksjdfgkhg",auth_info)
      console.log('call http with object', states);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/states',   
                 data: states,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": "790a1257b3928b0c43940f688585c2d22d4708aac6aa977b89d4a6ba33561fe66895cfe0ec7140b4572a53c9729bc33c3304330b4ce2b245b0b4f9aa3402782f","Content-Type": "application/json"},
               responseType: 'json'
              });
          }
   }
 


 

}]);







