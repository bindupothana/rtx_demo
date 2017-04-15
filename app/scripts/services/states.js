var app = angular.module('rtxDemoApp');

app.service('stateService', ['$http',function($http,$authProvider) { 
 return{
      getStateName:function(states) {
       //  var storeData=JSON.parse(localStorage.getItem('storeData'));
        
       // console.log("storedata",JSON.parse(localStorage.getItem('storeData')));
   var user_info = JSON.parse(localStorage.getItem('user_info'));
       console.log("state_user_info",user_info)
        var auth_info = user_info.auth_token;
        
        console.log("states",auth_info)
      console.log('call http with object', states);
      return  $http({
                method: 'GET',
                url: ' https://api-qa.retrotax-aci.com/states',   
                 data: states,
                headers: { "X-API-KEY": "yqvNrVR5Cs6vhLq1ZRPq38GM5OrXJ7C97n4BZCJa", "X-AUTH-TOKEN": auth_info,"Content-Type": "application/json"},
               responseType: 'json'
              });
          }
   }
 


 

}]);







