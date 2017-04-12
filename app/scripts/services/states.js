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
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": "820c11e051a81d021ae902f3aae3d3157aabd8c82ecca82f78b6e4b65a573723e277616ace8fd9739db2eb62ccee3651da7ab43fead6f48b63e780b63724e587","Content-Type": "application/json"},
               responseType: 'json'
              });
          }
   }
 


 

}]);







