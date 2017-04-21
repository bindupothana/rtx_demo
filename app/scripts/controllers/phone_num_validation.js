var app=angular.module('rtxDemoApp')
app.directive("customDirective", function () {
     
    return {
        
        restrict: "EA",
        

        link: function ($scope, element, attr) {
           
            element.bind('keydown', function(e) {
                    if (e.keyCode == 8){
                    
                    }else {
                         var number = this.value
                    if(this.value.length == 3)
                    {
                        console.log("hello")
                         this.value = number.substring(0,3) + '-';      
                        
                    }
                    else if(this.value.length == 7){
                        this.value = number.substring(0,7) + '-' ;
                    } 
                }
           
           });
    
        }

    };
    var num=number;
    number.maxlength=5

     return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                  var transformedInput = text.replace(/[^0-9]/g, '');
                   if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                 }
                 return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
}
                     
});