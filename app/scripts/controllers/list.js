 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','stateService','$state',
  	function($scope,stateService,$state) {
       $scope.result = {};
       $scope.inner_question = {};

      $scope.employeeList = JSON.parse(localStorage.getItem('employeeList'));
     $scope.submitNewEmployee=function(emp){
      $scope.employeeList =  JSON.parse(localStorage.getItem('employeeList'));    
       if( $scope.employeeList == null){
          $scope.employeeList = [];
        }
        $scope.employeeList.push(emp);
        console.log("push_emp",$scope.employeeList)

        localStorage.setItem('employeeList', JSON.stringify( $scope.employeeList));
  
        console.log(" employeeList", $scope.employeeList)

        $state.go("list");
     };
     

  
    $scope.getStateList=function(){
        $scope.selectState =stateService.getStateName().then(function(response){
        $scope.stateList =response.data; 
        console.log("states",response.data)     
        }) 
    }
    $scope.getStateList();
    

    $scope.questionaire = function(value){
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
