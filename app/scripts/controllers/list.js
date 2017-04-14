 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','stateService','$state',
  	function($scope,stateService,$state) {
       $scope.questionnaire = {};
       $scope.inner_question = {};

      $scope.employee = JSON.parse(localStorage.getItem('employee'));
     $scope.submitNewEmployee=function(employee){
      console.log("print_emp_info_new",employee)
      $scope.employee =  JSON.parse(localStorage.getItem('employee'));    
       if( $scope.employee == null){
          $scope.employee = [];
        }
        $scope.employee.push(employee);
        console.log("push_emp",$scope.employee)

        localStorage.setItem('employee', JSON.stringify( $scope.employee));
  
        console.log(" employee", $scope.employee)

        $state.go("list");
     };
     

  
    $scope.getStateList=function(){
        $scope.selectState =stateService.getStateName().then(function(response){
        $scope.stateList =response.data; 
        console.log("states",response.data)     
        }) 
    }
    $scope.getStateList();
    

    $scope.questionnaire = function(value){
    console.log(value)
    }
   

    $scope.validation_inner_questionaire = function(value){
    console.log("print_value",value)
    }
   


  $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };
 // $scope.getCounty=function(){
 //      console.log("counties",$scope.getCounty)  
 //    $scope.selectCounty =countyService.getCounty(result).then(function(value){
 //      console.log("counties",$scope.selectState)
 //      // $scope.counties =;
      
 //    })           
 //   }
 //   $scope.getCounty();  


}]);
