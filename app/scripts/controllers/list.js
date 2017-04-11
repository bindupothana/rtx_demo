 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','stateService','questionFactory','$state',
  	function($scope,$stateParams,stateService, questionFactory,$state) {

     $scope.submitNewEmployee=function(){
      console.log("jkjk",$scope.submitNewEmployee)
     $state.go("list");
     };
    
   
   
      

      $scope.getQuestion=function(){
     	questionFactory.getquestionFactory().then(function(data){
     	$scope.questions = data;
     	console.log("llll", $scope.questions)
       });
      }        
     	$scope.getQuestion();



  

   


}]);
