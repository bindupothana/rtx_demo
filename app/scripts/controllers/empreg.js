var app = angular.module('rtxDemoApp');
  app.controller('newCtrl',['$scope','$state',function($scope,$state) {
    $scope.newRegister=function(user){
    	var result=loginService.postName(obj)
	
	.success(function(data){
		data=$.parseJSON(JSON.parse(data));
		$scope.message=data;
    
    	$state.go("newemployee");
    };


   


}]);
