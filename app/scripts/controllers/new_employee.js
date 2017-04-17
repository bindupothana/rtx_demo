 var app = angular.module('rtxDemoApp');
  app.controller('employeeCtrl',['$scope','employeeService','stateService','countyService','companyService','locationService','$state',
  	function($scope,employeeService,stateService,countyService,companyService,locationService,$state) {
       $scope.questionnaire = {};
       $scope.questionnaires = {};

        $scope.employee = JSON.parse(localStorage.getItem('employee'));
        $scope.submitNewEmployee=function(employees){
            console.log("print_emp_info_new",employees)
             // $scope.employee =  JSON.parse(localStorage.getItem('employee'));    
             //   if( $scope.employee == null){
             //       $scope.employee = [];
             //      }
           // $scope.employee.push(employees);
           // console.log("push_emp",$scope.employee)
           // localStorage.setItem('employee', JSON.stringify( $scope.employee));  
            // console.log(" employeeList", $scope.employeeList)
           /// $state.go("list");
        };
      

      $scope.getEmployee_info_details=function(){
       employeeService.getEmployees($state.params.id).then(function(employeeResponse){
          $scope.employeeData =employeeResponse.data; 
          console.log("employee_info",employeeResponse.data)     
        })
      }
    
    $scope.getEmployee_info_details();

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
     // $scope.getCounties(); 


      $scope.getCompaniesList=function(){
        $scope.selectCompany =companyService.getCompanies().then(function(companiesResponse){
          $scope.companiesList =companiesResponse.data; 

          console.log("companies",companiesResponse.data)  
          // console.log("locations",$scope.item.fein)    
        })

      }
      $scope.getCompaniesList();


       $scope.getlocations=function(company_id){
        console.log("gdfhhh",company_id)
       locationService.getLocation(company_id).then(function(locationResponse){
          $scope.locationData =locationResponse.data; 
          console.log("location _info",locationResponse.data)     
        })
      }
    
  //  $scope.getlocations();


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
