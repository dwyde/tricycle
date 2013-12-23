var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope) {
	
	$scope.exercises = exercises;
	$scope.current = exercises[0];
	resetExercise();
	
	$scope.showExercise = function(exercise) {
		$scope.current = exercise;
		resetExercise();
	};
	
	$scope.solve = function(answer) {
		var result = $scope.current.solve(answer);
		if (result) {
			$scope.current.correct = true;
		}
		return result;
	};
	
	function resetExercise() {
		$scope.answer = '';
		$scope.showHint = false;
	}
});
