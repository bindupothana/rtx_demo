
var app = angular.module('rtxDemoApp');
app.controller('loginCtrl',['$scope','$stateParams','loginService','stateService','$state',function($scope,$stateParams,loginService,stateService,$state) {
	$scope.submit=function(user){

    
	 var obj={            
	 	'username':user.userName,            
	 	'password':user.password  
	 	}     
	 	  loginService.postName(obj).then(function(response){            
	 	  	   
	 	  	 if(response.status == 200){               
	 	  	  $state.go("empinfo");           
	 	  	   }else {

	 	  	        }                   
	 	  	         },function(error){       
	 	  	              console.error(JSON.stringify(err));
                          $scope.validationError = true;   
	 	  	                   })   
	 	  	                    };
   

    $scope.getStates=function(){
    	console.log("hjkjl",$scope.getStates)	 
    $scope.selectState =stateService.stateName(result).then(function(response){
    	console.log("hjkjl",$scope.selectState)
    	$scope.stateList =response.data;
    	
    })           
   };	 


}]);
