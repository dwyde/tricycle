var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope) {
	
	$scope.exercises = exercises;
	$scope.current = exercises[exercises.length - 1];
	resetExercise();
	
	$scope.showExercise = function(exercise) {
		$scope.current = exercise;
		resetExercise();
	};
	
	function resetExercise() {
		$scope.answer = '';
		$scope.showHint = false;
	}
});
