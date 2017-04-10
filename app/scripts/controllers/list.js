 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','$state','questionFactory',
  	function($scope,$stateParams,$state, questionFactory) {

     $scope.submitNewEmployee=function(){
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
