
  var app = angular.module('rtxDemoApp');
  app.controller('regCtrl',['$scope','$stateParams','stateService','$state',function($scope,$stateParams,stateService,$state) {
    $scope.newRegister=function(user){
      // console.log("lfg", user)
      
      // $scope.selectState =stateService.getStateName().then(function(response){
      
      // $scope.stateList =response.data; 
      // console.log("states",response.data)     
      // }) 
      $state.go("newemployee");
    };
        $scope.getStateList=function(){

     $scope.selectState =stateService.getStateName().then(function(response){
      
      $scope.stateList =response.data; 
      console.log("states",response.data)     
      }) 
   }

     
    $scope.employeelist=function(res){     
       $state.go("list");
    };

   $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };


    

   


}]);
