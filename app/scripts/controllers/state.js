
var app = angular.module('rtxDemoApp');
app.controller('stateCtrl',['$scope',function($scope){
	 $http({
        url: 'http://samedomain.com/GetPersons',
        method: "POST",
        data: postData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
            // success
        }, 
        function(response) { // optional
            // failed
        }
    );
}])

