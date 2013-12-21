import math

from tricycle.base_exercise import Exercise


class SimpleMultiplication(Exercise):
	
	title = 'Simple Multiplication'
	
	numbers = [12, 13, 14]
	
	problem = 'What is {}?'.format(' x '.join(map(str, numbers)))
	
	hints = ['Use a calculator, or your favorite programming language.']
	
	def solve(self):
		""" Multiply numbers together. """
		return reduce(lambda x, y: x * y, self.numbers, 1)


class PiDigit(Exercise):
	
	title = 'Digit of Pi'
	
	problem = 'What is the 6th decimal digit of Pi?'
	
	hints = [
		'Try Google, JavaScript\'s `Math.PI`, or Python\'s `math.pi`.',
		'If all else fails, try every possible answer :-)'
	]
	
	def solve(self):
		""" Index a string representation of Pi (3, dot, digits). """
		digit_str = str(math.pi)[7]
		return int(digit_str)
