/**
 * Notes:
 * 
 * - document fields: title, problem, hint, solve(), text (optional)
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
			return answer == String(Math.PI)[7]
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
				return answer == product
			}
		}
	}()),
	
	(function() {
		var dividend = 990,
			divisor = 73;
		return {
			title: 'Remainder',
			problem: 'What is the remainder when dividing ' + dividend +
					 ' by ' + divisor + '?',
			hint: 'Many programming languages compute remainders via ' +
				  'the modulo (%) operator.',
			solve: function(answer) {
				return answer == (dividend % divisor)
			}
		}
	}()),
	
	(function() {
		var number = 1423249;
		return {
			title: 'Factor',
			problem: 'Name a factor of ' + number + ' beside itself and 1.',
			hint: 'There is only one answer.',
			solve: function(answer) {
				var integer = parseInt(answer);
				return (!answer.match(/\D/)) && (integer !== 1) && 
					   (number % integer === 0)
			}
		}
	}()),
	
	(function() {
		var lower = 1,
			upper = 20;
		return {
			title: 'Evens Product',
			problem: 'Compute the product of all even integers from ' +
					 lower + ' to ' + upper + ', inclusive.',
			hint: 'For even numbers, n % 2 == 0.',
			solve: function(answer) {
				var product = 1;
				for (var i = lower; i <= upper; i++) {
					if (i % 2 == 0) {
						product *= i;
					}
				}
				return !answer.match(/\D/) && 
					   parseInt(answer) === product
			}
		}
	}()),
	
	(function() {
		var numbers = [
			548, 587, 902, 565, 768, 360, 915, 602, 457, 160, 599, 501,
			772, 511, 879, 207, 549, 305, 446, 850, 467, 333, 581, 110,
			377, 238, 569, 858, 620, 181, 933, 420, 586, 859, 673, 869,
			502, 349, 435, 832, 368, 274, 663, 861, 402, 556, 916, 784,
			679, 363, 658, 662, 125, 426, 467, 388, 746, 167, 842, 564,
			530, 504, 971, 745, 656, 878, 620, 500, 108, 272, 296, 512,
			353, 983, 624, 744, 644, 848, 112, 882, 335, 854, 298, 450,
			734, 549, 835, 215, 138, 527, 398, 855, 930, 120, 608, 944,
			310, 422, 749, 844
		];
		
		return {
			title: 'Largest',
			problem: 'What is the largest number in the following ' +
					 'list?',
			text: numbers.join(', '),
			hint: 'Loop through, and keep track of the leader.',
			solve: function(answer) {
				var current,
					max = Number.MIN_VALUE;
				
				for (var i = 0; i < numbers.length; i++) {
					current = numbers[i];
					if (current > max) {
						max = current;
					}
				}
				return answer == max;
			}
		}
	}()),
]
