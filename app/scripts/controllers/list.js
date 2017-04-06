 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','$state',function($scope,$stateParams,$state) {
    $scope.go_to_new_emp=function(user){
    $state.go("newemployee");
    };

  

   


}]);
