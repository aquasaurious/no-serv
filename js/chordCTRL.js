angular.module('chordApp').controller('chordCTRL', function($scope, chordSVC){

    $scope.getChart = function(a,b) {
      chordSVC.getChords(a,b)
        .then(function(response) {
                 $scope.chords = response.data;
                 
                 for (var i = 0; i < $scope.chords.length; i++) {
                 $scope.chords[i].fingering = $scope.chords[i].fingering.split(" ").join('').replace(/X/gi,'-');
                 $scope.chords[i].strings = $scope.chords[i].strings.split(' ').join('-');
                 $scope.chords[i].chordName = $scope.chords[i].chordName.split(',').join('').replace(/#/gi,"%23");
                }
                console.log($scope.chords);
         });
    }

    $scope.notes = chordSVC.notes;
    $scope.mode = chordSVC.mode;

});