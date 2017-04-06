
var app = angular.module('rtxDemoApp');
app.controller('loginCtrl',['$scope','$stateParams','loginService','$state',function($scope,$stateParams,loginService,$state) {
    $scope.submit=function(user){
    // 	$state.go("empinfo");
    // };

    	var obj={
    		'userName':'projet',
    		'userPassword':'rtx123'
    	}
    	console.log("kkkk",obj)
	var result=loginService.postName(obj)
	// console.log("ghghghg",result)
	.success(function(data){
		data=$.parseJSON(JSON.parse(data));
		$scope.message=data;
		$state.go("empinfo");


	})
	// $state.go("empinfo");
    
};
  

}]);
