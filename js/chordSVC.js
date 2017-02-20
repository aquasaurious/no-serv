    angular.module('chordApp').service('chordSVC', function($http){
        var baseURL = "https://api.uberchord.com/v1/chords?nameLike=";

        this.notes = [
            {"note": "A", "val": "A"},
            {"note": "A#/Bb", "val": "A#"},
            {"note": "B", "val": "B"},
            {"note": "C", "val": "C"},
            {"note": "C#/Db", "val": "C#"},
            {"note": "D", "val": "D"},
            {"note": "D#/Eb", "val": "D#"},
            {"note": "E", "val": "E"},
            {"note": "F", "val": "F"},
            {"note": "F#/Gb", "val": "F#"},
            {"note": "G", "val": "G"},
            {"note": "G#/Ab", "val": "G#"},
            ];

        this.mode = [
            {"mod": "maj"},
            {"mod": "m"},   // how minor is represented in 
        ];

    	this.getChords = function(root, mod) {              // grabs chord shapes and fingering data from Uberchord
            console.log("SVC:", root, mod);
            return $http({
                 method: 'GET',
                 url: baseURL + root + "_" + mod
            }).then(function(response){
                console.log(response);
                return response;}
            )};
	});
