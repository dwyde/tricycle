import math

from tricycle.base_exercise import Exercise


class SimpleMultiplication(Exercise):
	
	title = 'Multiplication'
	
	numbers = [12, 13, 14]
	
	problem = 'What is {}?'.format(' x '.join(map(str, numbers)))
	
	hint = 'Use a calculator, or your favorite programming language.'
	
	def solve(self):
		""" Multiply numbers together. """
		return reduce(lambda x, y: x * y, self.numbers, 1)


class PiDigit(Exercise):
	
	title = 'Digit of Pi'
	
	problem = 'What is the 6th decimal place of Pi?'
	
	hint = "Try Google, JavaScript's `Math.PI`, or Python's `math.pi`."
	
	def solve(self):
		""" Index a string representation of Pi (3, dot, digits). """
		digit_str = str(math.pi)[7]
		return int(digit_str)
