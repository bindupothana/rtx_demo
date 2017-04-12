
  var app = angular.module('rtxDemoApp');
  app.controller('regCtrl',['$scope','$stateParams','stateService','$state',function($scope,$stateParams,stateService,$state) {
    $scope.newRegister=function(user){
      
      $state.go("newemployee");
    };
  
    $scope.employeelist=function(res){     
       $state.go("list");
    };

   $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };


    

   


}]);
