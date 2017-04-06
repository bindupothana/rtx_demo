var app = angular.module('rtxDemoApp');

app.service('loginService', ['$http',function($http) {

  
   // this.postName=function(credentials){
   // 	var result=$http.post('https://api-qa.retrotax-aci.com/authentication', credentials)
   // 	.success(function(data){
   //       if(result==200){
   // 		result=(data);
   //    }

   // 	})
   // 	.error(function(){
   // 		alert("wrong");

   // 	});
   // 	return result;
   // }

   //  this.getNewEmployee=function(){
   // 	var newEmp=$http.get('api-qa.retrotax-aci.com/authentication')
   // }
   


   return{
      postName:function(credentials) {
      console.log('call http with object', credentials);
      return  $http({
                method: 'POST',
                url: 'https://api-qa.retrotax-aci.com/authentication',
                data: credentials,
                headers: { "Content-Type": "application/json" },
                responseType: 'json'
              });
      //    .success(function(data){
      //    if(result==200){
      //       result=(data);
      //      }

      //     })
      //   .error(function(){
      //     alert("wrong");


      // });
             // return result;
          }


   }

}]);
