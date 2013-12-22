var tricycleApp = angular.module('tricycleApp', []);
 
tricycleApp.controller('ExerciseMenuCtrl', function ($scope, $http) {
	$http.get('exercises.json').success(function(data) {
		$scope.exercises = data;
		$scope.current = data[0];
	});
	
	$scope.showHint = false;
	
	$scope.showExercise = function(exercise) {
		$scope.current = exercise;
		$scope.answer = '';
		$scope.showHint = false;
	};
});
