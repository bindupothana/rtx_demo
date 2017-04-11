 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','stateService','questionFactory','$state',
  	function($scope,$stateParams,stateService, questionFactory,$state) {

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
     

      $scope.getStates=function(){    
      stateService.stateName(states).then(function(response){     
      $scope.stateList =response.data;
      console.log("aaaa",response.data)
      
      
    });           
   }


   


}]);
