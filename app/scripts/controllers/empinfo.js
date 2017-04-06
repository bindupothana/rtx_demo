
  var app = angular.module('rtxDemoApp');
  app.controller('regCtrl',['$scope','$stateParams','$state',function($scope,$stateParams,$state) {
    $scope.newRegister=function(user){
    
    	$state.go("newemployee");
    };


   


}]);
