 var app = angular.module('rtxDemoApp');
  app.controller('newemployeeCtrl',['$scope','postemployeesService','employeeService','stateService',
    'countyService','foodService','felonService','vocrehabService','companyService','locationService','occupationService','$state',
  	function($scope,postemployeesService,employeeService,stateService,countyService,foodService,
      felonService,vocrehabService,companyService,locationService,occupationService,$state) {
       $scope.questionnaire = {};
       $scope.questionnaires = {};

    
        $scope.submitNewEmployee=function(employee){
          console.log("gfgfggfg", employee)
             postemployeesService.postEmployees(employee).then(function(empresponse){
               $scope.employeeInformation=empresponse.data

                 console.log("emplplppl",empresponse.data)
                  $state.go("list"); 
             })  
         }
        $scope.submitNewEmployee();
     
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

      $scope.get_afdc_counties=function(state_code){
        console.log("county",state_code)
          countyService.get_afdc_recipient_info_county_received(state_code).then(function(countyResponse){
            $scope.afdcCountiesList =countyResponse.data;
              console.log("counties",countyResponse.data)   
           })           
        }
       
      $scope.get_foodstamps_counties=function(state_code){
       console.log("county",state_code)
        foodService.get_foodstamps_recipient_info_county_received (state_code).then(function(foodstampsResponse){
           $scope.foodstampsCountiesList =foodstampsResponse.data;
            console.log("counties",foodstampsResponse.data)   
         })           
      }
      $scope.get_felon_state=function(state_code){
      console.log("county",state_code)
        felonService.felon_info_yes_is_state_conviction (state_code).then(function(felonResponse){
           $scope.felonCountiesList =felonResponse.data;          
           console.log("counties",felonResponse.data)   
         })           
      }
       

       $scope.get_voc_rehab=function(state_code){
      console.log("county",state_code)
        vocrehabService.get_voc_rhab_county_received (state_code).then(function(rehabResponse){
           $scope.vocrehabList =rehabResponse.data;          
           console.log("counties",rehabResponse.data)   
         })           
      }

      $scope.getCompaniesList=function(){
        $scope.selectCompany =companyService.getCompanies().then(function(companiesResponse){
          $scope.companiesList =companiesResponse.data; 
          console.log("companies",companiesResponse.data)              
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
     $scope.questionnaire = function(value){
       console.log(value)
       }
   

     $scope.get_occupation=function(){
       occupationService.getOccupation($state.params.id).then(function(occResponse){
          $scope.occupationData =occResponse.data; 
          console.log("occResponse",occResponse.data)     
        })
      }
        $scope.get_occupation();



      $scope.questionnaires = function(value){
        console.log("print_value",value)
        }
    $scope.go_to_new_emp=function(){      
    $state.go("newemployee");
    };

}]);
