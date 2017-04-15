
var app = angular.module('rtxDemoApp');
app.controller('loginCtrl',['$scope','loginService','$state',
	function($scope,loginService,$state) {
	$scope.submit=function(user){

    	 	 
	 var obj={            
	 	'username':user.userName,            
	 	'password':user.password  
	 	}     
	 	  loginService.postName(obj).then(function(response){ 
           if(response.status == 200){            

             	console.log("login",response.data)
				localStorage.setItem('user_info', JSON.stringify(response.data));                
               $state.go("empinfo"); 
                     
	 	  	   }else {
	 	  	   	        var data={};

	 	  	        }                   
	 	  	         },function(error){       
	 	  	              console.error("login_ss",JSON.stringify(err));
                          $scope.validationError = true;   
	 	  	                   })   
	 	  	                    };
   

    


}]);
