 var app = angular.module('rtxDemoApp');
  app.controller('employeeCtrl',['$scope','stateService','countyService','companyService','locationService','$state',
  	function($scope,stateService,countyService,companyService,locationService,$state) {
       $scope.questionnaire = {};
       $scope.questionnaires = {};

        $scope.employeeList = JSON.parse(localStorage.getItem('employeeList'));
        $scope.submitNewEmployee=function(employees){
            console.log("print_emp_info_new",employees)
             $scope.employeeList =  JSON.parse(localStorage.getItem('employeeList'));    
               if( $scope.employeeList == null){
                   $scope.employeeList = [];
                  }
            $scope.employeeList.push(employees);
            console.log("push_emp",$scope.employeeList)
            localStorage.setItem('employeeList', JSON.stringify( $scope.employeeList));  
            console.log(" employeeList", $scope.employeeList)
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
          // console.log("locations",$scope.item.fein)    
        })

      }
      $scope.getCompaniesList();




      //  var obj={            
      //     'id':company.id ,            
      //   }   
      //   $scope.locationList=obj[1]; 


      // $scope.getCompaniesList=function(id){
      //   $scope.locationList=id;
      //   // $scope.sepaniesList =companiesResponse.data; 

      //     // console.log("companies",companiesResponse.data)  
      //     // console.log("locations",$scope.item.fein)    
      //   // })

      // }
      // $scope.getCompaniesList();




      $scope.getLocations=function(companiesList){
        $scope.selectLocation =locationService.getLocation().then(function(locationResponse){
          $scope.locationList =locationResponse.data; 
          console.log("locations",companiesResponse.data)     
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
