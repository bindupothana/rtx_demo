 var app = angular.module('rtxDemoApp');
  app.controller('showEmpCtrl',['$scope','employeeService','$state',
  	function($scope,employeeService,$state) {
   
console.log("states", $state.params.id)



      $scope.getEmployee_info=function(){
       employeeService.getEmployee($state.params.id).then(function(employeeResponse){
          $scope.employeeData =employeeResponse.data; 
          console.log("employee _info",employeeResponse.data)     
        })
      }
    
    $scope.getEmployee_info();

   


  $scope.go_to_employee_list_page=function(){      
    $state.go("newemployee");
    };
 $scope.employees_list_page=function(res){     
       $state.go("list");
    };


}]);
