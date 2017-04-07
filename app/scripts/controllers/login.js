
var app = angular.module('rtxDemoApp');
app.controller('loginCtrl',['$scope','$stateParams','loginService','$state',function($scope,$stateParams,loginService,$state) {
	$scope.submit=function(user){
    	$state.go("empinfo");
    };
	//     var obj={
	//     	'userName':'project',
	//     	'userPassword':'rtx123'
	//     }
	//     loginService.postName(obj).then(function(data){
	//     	console.log(data);
	    	// data=$.parseJSON(JSON.parse(data));
	    	// $scope.message=data;
	//     	$state.go("empinfo");
	//     }, function(error){
	//     	console.log(error);
	//     })
	// };
}]);
