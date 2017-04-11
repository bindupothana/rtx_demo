
  var app = angular.module('rtxDemoApp');
  app.controller('regCtrl',['$scope','$stateParams','stateService','$state',function($scope,$stateParams,stateService,$state) {
    $scope.newRegister=function(user){
      console.log("lfg", user)
      
      $scope.selectState =stateService.getStateName().then(function(response){
      console.log("hjkjl",response.data)
      $scope.stateList =response.data;      
    })    
  
    $state.go("newemployee");
    };

     
    $scope.employeelist=function(res){
        // console.log("lfg",res)
  	
       $state.go("list");
    };
   $scope.go_to_new_emp=function(){
            // console.log("lfg",$scope.go_to_new_emp)

    $state.go("newemployee");
    };


    

   


}]);
