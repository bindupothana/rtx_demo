 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','stateService','questionFactory','saveEmployeeService','$state',
  	function($scope,stateService, saveEmployeeService,$state) {
       $scope.result = {};
       $scope.inner_question = {};


     $scope.submitNewEmployee=function(emp){
      var employeeList =  JSON.parse(localStorage.getItem('employeeList'));    
      console.log("employeeList",employeeList);
       if(employeeList == null){
      employeeList = [];
    }
    employeeList.push(emp);
    console.log("hhhhh",employeeList.push(emp))

    return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  


       $state.go("list");
     };
     

  $scope.getStateList=function(){

     $scope.selectState =stateService.getStateName().then(function(response){
      
      $scope.stateList =response.data; 
      console.log("states",response.data)     
      }) 
   }

   $scope.questionaire = function(value){
    console.log(value)
  }
   $scope.validation_inner_questionaire = function(value){
    console.log(value)
  }

   $scope.getStateList();
   
 // $scope.getCounty=function(){
 //      console.log("counties",$scope.getCounty)  
 //    $scope.selectCounty =countyService.getCounty(result).then(function(value){
 //      console.log("counties",$scope.selectState)
 //      // $scope.counties =;
      
 //    })           
 //   }
 //   $scope.getCounty();  



 



}]);
