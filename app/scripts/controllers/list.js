 var app = angular.module('rtxDemoApp');
  app.controller('listCtrl',['$scope','stateService','countyService','companyService','locationService','$state',
  	function($scope,stateService,countyService,companyService,locationService,$state) {
       $scope.questionnaire = {};
       $scope.questionnaires = {};

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
          $scope.stateList = response.data; 
          console.log("states",response.data)     
        })
     }
     $scope.getStateList();



     $scope.getCounties=function(){
        $scope.selectCounty =countyService.get_afdc_recipient_info_county_received('state_code').then(function(countyResponse){
           $scope.countiesList =countyResponse.data;
           console.log("counties",$scope.get_afdc_recipient_info_county_received)
           console.log("counties",companiesResponse.data)   
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



      $scope.getEmployees=function(){
        $scope.selectEmployee =locationService.getEmployees().then(function(employeeResponse){
          $scope.employeeList =employeeResponse.data; 
          console.log("employees",employeeResponse.data)     
        })
      }
      $scope.getLocations();
    

    $scope.questionnaire = function(value){
    console.log(value)
    }
   

    $scope.questionnaires = function(value){
    console.log("print_value",value)
    }
   


  $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };



}]);
