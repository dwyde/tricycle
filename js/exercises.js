/**
 * Notes:
 * 
 * - document fields: title, problem, hint, solve(), text (optional)
 * - to solve, `answer` will be a string
 */
var EXERCISES = [
	new function() {
		this.title = 'Multiplication';
		this.numbers = [12, 13, 14];
		this.problem = 'What is ' + this.numbers.join(' x ') + '?';
		this.hint = 'Use your favorite programming language.';
		this.solve = function(answer) {
			var product = 1;
			for (var i = 0; i < this.numbers.length; i++) {
				product *= this.numbers[i];
			}
			return answer == product
		};
	},
	
	new function() {
		this.title = 'Remainder';
		this.dividend = 990;
		this.divisor = 73;
		this.problem = 'What is the remainder when dividing ' +
						this.dividend + ' by ' + this.divisor + '?';
		this.hint = 'Many languages compute remainders via the ' +
					'modulo (%) operator.';
		this.solve = function(answer) {
			return answer == this.dividend % this.divisor
		};
	},
	
	new function() {
		this.title = 'Factor';
		this.number = 1423249;
		this.problem = 'Name a factor of ' + this.number + ' beside ' +
					   'itself and 1.';
		this.hint = 'There is only one answer.',
		this.solve = function(answer) {
			var integer = parseInt(answer);
			return !answer.match(/\D/) && integer !== this.number &&
				   integer !== 1 && (this.number % integer === 0)
		}
	},
	
	new function() {
		this.title = 'Digit of Pi';
		this.problem = 'What is the 6th decimal place of Pi?';
		this.hint = "Try JavaScript's `Math.PI` or Python's `math.pi`.";
		this.solve = function(answer) {
			// Decimal places start at index 2.
			return answer == parseInt(String(Math.PI)[7])
		}
	},
	
	new function() {
		this.title = 'Evens Product';
		this.lower = 1;
		this.upper = 20;
		this.problem = 'Find the product of all even integers from ' +
				 this.lower + ' to ' + this.upper + ', inclusive.',
		this.hint = 'For even numbers, n % 2 == 0.',
		this.solve = function(answer) {
			var product = 1;
			for (var i = this.lower; i <= this.upper; i++) {
				if (i % 2 == 0) {
					product *= i;
				}
			}
			return !answer.match(/\D/) &&  parseInt(answer) === product
		}
	},
	
	new function() {
		this.title = 'Character Count';
		this.problem = 'How many characters are in the following ' +
					   'string?';
		this.text = 'Why did the orange roll back down the hill? ' +
				    'Because she was out of juice.';
		this.hint = "Use Python's `len(text)`, JavaScript's " +
				    "`text.length`, or the Unix shell's `wc`.",
		this.solve = function(answer) {
			return answer == this.text.length
		}
	},
	
	new function() {
		this.title = 'Word Count';
        this.problem = 'How many words are in the following string?',
        this.text = 'Why was the skeleton afraid to cross the road? ' +
				    'Because he had no guts.';
		this.hint = 'Split the string on spaces, and count the ' +
			  'length of the resulting list.';
		this.solve = function(answer) {
			var words = this.text.split(' ');
			return answer == words.length
		}
	},
    
    new function() {
        this.title = 'Occurrences';
        this.character = 'e';
        this.problem = 'How many times does the character "' +
                       this.character + '" appear in the following ' +
                       'string?';
        this.text = 'And on that day, he learned why not to wear ' +
                    'socks with sandals. It was a difficult lesson, ' +
                    'but an extremely important one.';
        this.hint = 'Loop over the characters, and keep a running ' +
                    'count.';
        this.solve = function(answer) {
            var count = 0;
            for (var i = 0; i < this.text.length; i++) {
                if (this.text.charAt(i) == this.character) {
                    count += 1;
                }
            }
            return answer == count
        }
    },
    
    new function() {
        this.title = 'Reverse';
        this.problem = 'Reverse the following string:',
        this.text = 'How many tickles does it take to make an ' +
				    'octopus laugh? Ten tickles.';
        this.hint = 'One strategy: loop over the characters in ' +
              'reverse order, and build a new string.',
        this.solve = function(answer) {
            reversed = '';
            for (var i = this.text.length - 1; i >= 0; i--) {
                reversed += this.text.charAt(i);
            }
            return answer == reversed
        }
    },
    
    new function() {
        this.title = 'Missing';
        this.lower = 0;
        this.upper = 99;
        this.problem = 'Which integer between ' + this.lower + ' and ' +
                       this.upper + ' (inclusive) is not in the ' + 
                       'following list?';
        this.numbers = [
			23, 20, 28, 1, 16, 24, 18, 52, 75, 89, 4, 67, 66, 70, 81,
			71, 98, 61, 8, 30, 51, 53, 17, 38, 83, 94, 59, 87, 62, 10,
			79, 37, 33, 55, 88, 77, 13, 41, 35, 36, 60, 97, 46, 63, 47,
			32, 96, 34, 45, 5, 90, 29, 84, 49, 9, 25, 3, 43, 68, 80, 39,
			57, 76, 69, 64, 56, 82, 42, 92, 58, 78, 50, 26, 22, 74, 48,
			85, 21, 12, 95, 14, 15, 31, 40, 7, 93, 27, 99, 19, 54, 11,
			44, 0, 86, 91, 2, 72, 6, 65
		];
        this.text = this.numbers.join(', ');
        var that = this;
        this.hint = 'The integers from ' + this.lower + ' to ' + 
                    this.upper + ' add up to ' + (function() {
                        var count = 0;
                        for (var i = that.lower; i <= that.upper; i++) {
                            count += i;
                        }
                        return count;
                    }()) + '.';
        this.solve = function(answer) {
            var integer = parseInt(answer);
            return !answer.match(/\D/) &&
                   integer >= this.lower &&
                   integer <= this.upper &&
                   this.numbers.indexOf(integer) === -1
        }
    },
    new function() {
        this.title = 'Largest';
        this.problem = 'What is the largest number in the following ' +
                       'list?';
        this.numbers = [
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
        this.text = this.numbers.join(', '),
        this.hint = 'Loop through, and keep track of the leader.';
        this.solve = function(answer) {
            var current,
                max = Number.MIN_VALUE;
            
            for (var i = 0; i < this.numbers.length; i++) {
                current = this.numbers[i];
                if (current > max) {
                    max = current;
                }
            }
            return answer == max
        }
    },
    
    new function() {
        this.title = 'Duplicate',
        this.problem = 'Which number appears twice in the following ' +
                       'list?';
        this.numbers = [
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
		this.text = this.numbers.join(', ');
        this.hint = 'One approach: store the values in a dictionary, ' +
				    'and check whether each value is already in there.';
        this.solve = function(answer) {
            var count = 0;
            for (var i = 0; i < this.numbers.length; i++) {
                if (this.numbers[i] == answer) {
                    count += 1;
                }
            }
            return count == 2
        }
    },
];
