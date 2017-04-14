 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','stateService','countyService','companyService','locationService','$state',
  	function($scope,stateService,countyService,companyService,locationService,$state) {
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



     $scope.getCounties=function(){
        console.log("counties",$scope.getCounty)  
        $scope.selectCounty =countyService.getCounty().then(function(value){
           console.log("counties",$scope.selectCounty)
           $scope.counties =value.data;
         })           
      }
      $scope.getCounties(); 


      $scope.getCompaniesList=function(){
        $scope.selectCompany =companyService.getCompanies().then(function(companiesResponse){
          $scope.companiesList =companiesResponse.data; 
          console.log("companies",companiesResponse.data)     
        })
      }
      $scope.getCompaniesList();



      $scope.getLocations=function(){
        $scope.selectLocation =locationService.getLocation().then(function(locationResponse){
          $scope.locationList =locationResponse.data; 
          console.log("locations",locationResponse.data)     
        })
      }
      $scope.getLocations();
    

    $scope.questionnaire = function(value){
    console.log(value)
    }
   

    $scope.validation_inner_questionaire = function(value){
    console.log("print_value",value)
    }
   


  $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };



}]);
