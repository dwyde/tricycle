var TRICYCLE = (function() {
	
	var allExercises = {};
	
	function Exercise(data) {
		this.title = data.title;
		this.problem = data.problem;
		this.solutions = data.solutions;
		this.hints = data.hints;
		
		allExercises[this.title] = this;
	}
	
	Exercise.prototype.createElement = function() {
		var container;
	};
	
	function ExerciseGroup(groupObj) {
		var exercise;
		
		this.label = groupObj.label;
		this.exercises = [];
		for (var i = 0; i < groupObj.exercises.length; i++) {
			exercise = new Exercise(groupObj.exercises[i]);
			this.exercises.push(exercise);
		}
	}
	
	ExerciseGroup.prototype.createElement = function() {
		var container = document.createElement('div');
		container.innerText = this.label;
		container.className += ' exercise-group';
		
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(container);
		
	};
	
	return {
		makeExercises: function(data) {
			var groupName,
				group;
			
			for (groupName in data) {
				if (data.hasOwnProperty(groupName)) {
					var group = new ExerciseGroup(data[groupName]);
					group.createElement();
				}
			}
			
		},
		loadExercise: function(name) {
		}
	}
}());

(function() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			TRICYCLE.makeExercises(data);
		}
	};
	xhr.open('GET', 'exercises.json', true);
	xhr.send();
}())
