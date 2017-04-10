
var app = angular.module('rtxDemoApp');
app.controller('loginCtrl',['$scope','$stateParams','loginService','$state',function($scope,$stateParams,loginService,$state) {
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
   $scope.list_of_states=function(){
   loginService.stateName().then(function(data){     
   var data =$.parseJSON(JSON.parse(data));
    $scope.StateList=data;
      })
   };

}]);
