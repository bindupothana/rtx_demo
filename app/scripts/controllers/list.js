 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','$stateParams','$state','questionFactory',
  	function($scope,$stateParams,$state, questionFactory) {
    // $scope.go_to_new_emp=function(user){
    // $state.go("newemployee");
    // };
     $scope.submitNewEmployee=function(){
     $state.go("list");
     };


      $scope.getQuestion=function(){
     	questionFactory.getquestionFactory().then(function(data){
     	$scope.questions = data;
     	console.log("$scope.question", $scope.questions)
       });
      }
        
     	$scope.getQuestion(); 
     	 $scope.selectedAnswerForQues = function(key, inner_key){
        if($scope.selectedAns.length == 0){
          var answer = {
            question: key ,
            userSelectedAnswer: inner_key
          }
          $scope.selectedAns.push(answer);
        }
       else {
          var found = false;
          for(var i=0; i< $scope.selectedAns.length; i++){
            if($scope.selectedAns[i].question == key){
             found = true;
             $scope.selectedAns[i].userSelectedAnswer = inner_key;
           }
         }
         if(!found){
          var answer = {
            question: key,
            userSelectedAnswer: inner_key
          }
          $scope.selectedAns.push(answer);
        } 
      }
      console.log("Ans",$scope.selectedAns);
      console.log("key, inner_key", key, inner_key)
    }

   


}]);
