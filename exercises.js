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
			return answer == parseInt(String(Math.PI)[7])
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
			23, 20, 28, 1, 16, 24, 18, 52, 75, 89, 4, 67, 66, 70, 81,
			71, 98, 61, 8, 30, 51, 53, 17, 38, 83, 94, 59, 87, 62, 10,
			79, 37, 33, 55, 88, 77, 13, 41, 35, 36, 60, 97, 46, 63, 47,
			32, 96, 34, 45, 5, 90, 29, 84, 49, 9, 25, 3, 43, 68, 80, 39,
			57, 76, 69, 64, 56, 82, 42, 92, 58, 78, 50, 26, 22, 74, 48,
			85, 21, 12, 95, 14, 15, 31, 40, 7, 93, 27, 99, 19, 54, 11,
			44, 0, 86, 91, 2, 72, 6, 65
		];
		
		return {
			title: 'Missing',
			problem: 'Which integer between 0 and 99 (inclusive) is ' +
					 'not in the following list?',
			text: numbers.join(', '),
			hint: 'The integers from 0 to 99 add up to 4950.',
			solve: function(answer) {
				var integer = parseInt(answer);
				return !answer.match(/\D/) && integer >= 0 &&
					   integer <= 99 && numbers.indexOf(integer) === -1
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
			problem: 'What is the largest number in the following list?',
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
				return answer == max
			}
		}
	}()),
	
	(function() {
		var numbers = [
			512, 516, 521, 543, 566, 567, 428, 586, 695, 605, 629, 118,
			636, 644, 134, 136, 139, 653, 144, 149, 666, 162, 183, 196,
			201, 716, 719, 723, 727, 223, 227, 228, 343, 252, 766, 981,
			257, 770, 215, 786, 789, 283, 798, 799, 805, 302, 303, 818,
			825, 826, 827, 830, 832, 324, 326, 840, 330, 848, 741, 856,
			656, 866, 374, 375, 890, 891, 343, 380, 381, 382, 895, 905,
			906, 910, 913, 914, 915, 920, 411, 936, 940, 948, 441, 960,
			452, 456, 458, 463, 464, 465, 467, 469, 483, 997, 487, 499,
			255, 509, 511, 889
		];
		
		return {
			title: 'Duplicate',
			problem: 'Which number appears twice in the following list?',
			text: numbers.join(', '),
			hint: 'One approach: store the values in a dictionary, ' +
				  'and check whether each value is already in there.',
			solve: function(answer) {
				var count = 0;
				for (var i = 0; i < numbers.length; i++) {
					if (numbers[i] == answer) {
						count += 1;
					}
				}
				return count == 2
			}
		}
	}()),
	
	(function() {
		var character = 'e',
			text = 'And on that day, he learned why not to wear ' +
				   'socks with sandals. It was a difficult lesson, ' +
				   'but an extremely important one.';
		return {
			title: 'Character Count',
			problem: 'How many times does the character "' + character +
					 '" appear in the following string?',
			text: text,
			hint: 'Loop over the characters, and keep a running count.',
			solve: function(answer) {
				var count = 0;
				for (var i = 0; i < text.length; i++) {
					if (text.charAt(i) == character) {
						count += 1;
					}
				}
				return answer == count
			}
		}
	}()),
	
	(function() {
		var text = 'How many tickles does it take to make an octopus ' +
				   'laugh? Ten tickles.';
		return {
			title: 'Reverse',
			problem: 'Reverse the following string:',
			text: text,
			hint: 'One strategy: loop over the characters in reverse' +
				  ' order, and build a new string.',
			solve: function(answer) {
				reversed = '';
				for (var i = text.length - 1; i >= 0; i--) {
					reversed += text.charAt(i);
				}
				return answer == reversed
			}
		}
	}()),
]
