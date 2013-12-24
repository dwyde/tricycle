var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope) {
    
    $scope.exercises = EXERCISES;
    $scope.current = EXERCISES[0];
    readCorrect();
    resetExercise();
    
    $scope.showExercise = function(exercise) {
        $scope.current = exercise;
        resetExercise();
    };
    
    $scope.solve = function(answer) {
        var result = $scope.current.solve(answer);
        if (result) {
            $scope.current.correct = true;
            STORAGE.markCorrect($scope.current.title);
        }
        return result;
    };
    
    function readCorrect() {
        var exercise;
        
        for (var i = 0; i < $scope.exercises.length; i++) {
            exercise = $scope.exercises[i];
            if (STORAGE.isCorrect(exercise.title)) {
                exercise.correct = true;
            }
        }
    }
    
    function resetExercise() {
        $scope.answer = '';
        $scope.showHint = false;
    }
});
