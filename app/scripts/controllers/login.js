
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
	 	  	$scope.storeData =  JSON.parse(localStorage.getItem('$scope.storeData'));
             $scope.storeData = [];
             $scope.storeData.push(response.data);
              console.log($state)
               
               $state.go("empinfo"); 
              return localStorage.setItem('user_info', JSON.stringify($scope.storeData));         
	 	  	   }else {
	 	  	   	        var data={};

	 	  	        }                   
	 	  	         },function(error){       
	 	  	              console.error(JSON.stringify(err));
                          $scope.validationError = true;   
	 	  	                   })   
	 	  	                    };
   

    


}]);
