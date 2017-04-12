var app = angular.module('rtxDemoApp');
app.service('saveEmployeeService',function() {
  // var factory = {};
  
  this.saveEmployee = function(employee){
    var employeeList =  JSON.parse(localStorage.getItem('employeeList'));    
      console.log("employeeList",employeeList);

    if(employeeList == null){
      employeeList = [];
    }
    employeeList.push(employee);

    return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  }
      



  });




