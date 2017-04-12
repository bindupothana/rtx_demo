 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','stateService','questionFactory','$state',
  	function($scope,$stateParams,stateService, questionFactory,$state) {
       $scope.result = {};
       $scope.inner_question = {};


     $scope.submitNewEmployee=function(){
      console.log("jkjk",$scope.submitNewEmployee)
     $state.go("list");
     };
     // $scope.result = {};
      $scope.getQuestion=function(){
     	questionFactory.getquestionFactory().then(function(data){
     	$scope.questions = data;
     	console.log("llll", $scope.questions)
       });
      }        
     	$scope.getQuestion();



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
 //      $scope.counties =value.data;
      
 //    })           
 //   }
 //   $scope.getCounty();  

}]);
