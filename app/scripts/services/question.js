var app = angular.module('rtxDemoApp');
app.service('questionService',function($http){    
     this.getQuestion= function()
    {
	    return $http.get('json/question.json').success(function(response) {
	       // console.log(response.data);
	     });

    }

 

});

