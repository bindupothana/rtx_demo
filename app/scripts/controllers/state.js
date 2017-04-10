
// var app = angular.module('rtxDemoApp');
// app.controller('stateCtrl',['$scope',function($scope){
// 	 $http({
//         url: 'http://samedomain.com/GetPersons',
//         method: "POST",
//         data: postData,
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//     })
//     .then(function(response) {
//             // success
//         }, 
//         function(response) { // optional
//             // failed
//         }
//     );
// }])


var app = angular.module('rtxDemoApp');
app.controller('stateCtrl',['$scope','$stateParams','stateService','$state',function($scope,$stateParams,stateService,$state) {
	$scope.getStates=function(){
		var obj={            
	 	
	 	}     
    stateService.stateName(obj).then(function(response){
    })            
   }	 

   $scope.getcounties=function(){
    stateService.county().then(function(response){
    })            
   }	 	  	 
   





	$scope.submit=function(user){
    
	 var obj={            
	 	'username':user.userName,            
	 	'password':user.password  
	 	}     
	 	  loginService.postName(obj).then(function(response){            
	 	  	console.log(response);           
	 	  	 if(response.status == 200){               
	 	  	  $state.go("empinfo");           
	 	  	   }else {

	 	  	        }                   
	 	  	         },function(error){       
	 	  	              console.error(JSON.stringify(err));
                          $scope.validationError = true;   
	 	  	                   })   
	 	  	                    };
  

}]);

