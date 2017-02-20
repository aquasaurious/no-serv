angular.module('chordApp').directive('chartChord', function(){

   
 
    var chart = function() {
       return "http://chordgenerator.net/"+name+".png?s=5";             // p="+strings.join('')+"&f="+fingers.join('')+"&
    }

    console.log(chart());

    return {
        restrict: 'AE',
        templateUrl: 'chartChord.html',
        link:function(scope,elem,attrs){
            //scope.name = $interpolate(attrs.name)(scope);
        }
    };
})