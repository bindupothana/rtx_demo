
  var app = angular.module('rtxDemoApp');
  app.controller('regCtrl',['$scope','$stateParams','$state',function($scope,$stateParams,$state) {
    $scope.newRegister=function(user){
    $state.go("newemployee");
    };

    $scope.employeelist=function(){  	
       $state.go("list");
    };
   $scope.go_to_new_emp=function(){
    $state.go("newemployee");
    };


    

   


}]);
