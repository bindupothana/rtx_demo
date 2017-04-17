 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','employeeService','$state',
  	function($scope,employeeService,$state) {
   




      $scope.getEmployees=function(){
       employeeService.getEmployees().then(function(employeeResponse){
          $scope.employeeList =employeeResponse.data.list; 
          console.log("employees",employeeResponse.data.list)     
        })
      }
    
    $scope.getEmployees();

   


  $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };



}]);
