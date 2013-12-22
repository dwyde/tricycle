/**
 * Notes:
 * 
 * - document required fields: title, problem, hint, solve().
 * - to solve, `answer` will be a string
 * - two ways to write: {} and (function(){})
 */

var exercises = [
	{
		title: 'Digit of Pi',
		problem: 'What is the 6th decimal place of Pi?',
		hint: "Try Google, JavaScript's `Math.PI`, or Python's `math.pi`.",
		solve: function(answer) {
			// Decimal places start at index 2.
			return answer == String(Math.PI)[7];
		}
	},
	
	(function() {
		var numbers = [12, 13, 14];
		return {
			title: 'Multiplication',
			problem: 'What is ' + numbers.join(' x ') + '?',
			hint: 'Use a calculator, or your favorite programming language.',
			solve: function(answer) {
				var product = 1;
				for (var i = 0; i < numbers.length; i++) {
					product *= numbers[i];
				}
				return answer == product;
			}
		}
	}()),
]


console.log(exercises);
