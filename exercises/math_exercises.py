from exercises.base_exercise import Exercise


class SimpleMultiplication(Exercise):
	
	title = 'Simple Multiplication'
	
	numbers = [12, 13, 14]
	
	problem = 'What is {}?'.format(' x '.join(map(str, numbers)))
	
	hints = ['Use a calculator, or your favorite programming language.']
	
	def solve(self):
		""" Multiply numbers together. """
		return reduce(lambda x, y: x * y, self.numbers, 1)
