/**
 * 
 * AngularJS code for Tricycle.
 * 
 */
 
/**
 * Top-level AngularJS controlller.
 */
var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope) {
    
    /**
     * Perform initial setup.
     */
    $scope.exercises = EXERCISES;
    $scope.current = EXERCISES[0];
    readCorrect();
    resetExercise();
    
    /**
     * Display an exercise in the main content area.
     */
    $scope.showExercise = function(exercise) {
        $scope.current = exercise;
        resetExercise();
    };
    
    /** 
     * Check a user-supplied answer, and possibly mark an
     * exercise correct.
     */
    $scope.solve = function(answer) {
        var result = $scope.current.solve(answer);
        if (result) {
            $scope.current.correct = true;
            STORAGE.markCorrect($scope.current.title);
        }
        return result;
    };
    
    /**
     * Mark all previously-answered questions as correct.
     */
    function readCorrect() {
        var exercise;
        
        for (var i = 0; i < $scope.exercises.length; i++) {
            exercise = $scope.exercises[i];
            if (STORAGE.isCorrect(exercise.title)) {
                exercise.correct = true;
            }
        }
    }
    
    /**
     * Reset the exercise display's state.
     */
    function resetExercise() {
        $scope.answer = '';
        $scope.showHint = false;
    }
});
