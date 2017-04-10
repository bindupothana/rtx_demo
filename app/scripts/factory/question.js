var app = angular.module('rtxDemoApp');
app.factory('questionFactory', function($q, questionService) {
     var factory={}; 
     var yesMap = {};
  
     factory.getquestionFactory = function() {
     var deferred = $q.defer();
       questionService.getQuestion().then(function(resp) {  




   //      for(var i=0; i< resp.data.length; i++){
   //        console.log(resp.data[i].Yes)    
   //        var roleMap = isExistKey(yesMap, resp.data[i].Yes);
   //        if(roleMap){
   //     var roleList = isExistKey(roleMap, resp.data[i].role);
   //     if(roleList){
   //       roleList.push(resp.data[i]);
   //     }else{
   //       roleList = [];
   //       roleList.push(resp.data[i]);
   //     }
              
   //     roleMap[resp.data[i].role] = roleList;
   //            schoolNameMap[resp.data[i].school_name] = roleMap;
   //        } else{
   //            var roleList = [];
   //            roleList.push(resp.data[i]);
   //     var roleMap = {};
   //     roleMap[resp.data[i].role] = roleList;
   //            schoolNameMap[resp.data[i].school_name] = roleMap;
   //        }
   // }
       deferred.resolve(resp.data);
     },
       function(errorInfo) {
           deferred.reject([]);
        });
      return deferred.promise;
      }
  //   factory.saveEmployee = function(employee){
  //   var employeeList =  JSON.parse(localStorage.getItem('employeeList')); 
  //   console.log(angular.copy(employeeList));
  //   if(employeeList == null){
  //     employeeList = [];
  //   }
  //   employeeList.push(employee);

  //   return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  // }
      return factory;



  });




