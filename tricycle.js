var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope) {
	
	$scope.exercises = exercises;
	$scope.current = exercises[0];
	
	$scope.showHint = false;
	
	$scope.showExercise = function(exercise) {
		$scope.current = exercise;
		$scope.answer = '';
		$scope.showHint = false;
	};
});
