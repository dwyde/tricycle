import abc
import json


class Exercise(object):
	
	__metaclass__ = abc.ABCMeta
	
	@abc.abstractmethod
	def solve(self):
		pass
		
	def to_json(self):
		""" Serialize an exercise to a JavaScript-friendly format. """
		solutions = self.solve()
		if not isinstance(solutions, list):
			solutions = [solutions]
		
		return {
			'solutions': solutions,
			'title': self.title,
			'problem': self.problem,
			'hints': self.hints,
		}


class SimpleMultiplication(Exercise):
	
	title = 'Simple Multiplication'
	
	numbers = [12, 13, 14]
	
	problem = 'What is {}?'.format(' x '.join(map(str, numbers)))
	
	hints = ['Use a calculator, or your favorite programming language.']
	
	def solve(self):
		""" Multiply numbers together. """
		return reduce(lambda x, y: x * y, self.numbers, 1)


class ExercisesToJSON(json.JSONEncoder):
	def default(self, obj):
		try:
			return obj.to_json()
		except AttributeError:
			return super(ExercisesToJSON, self).default(obj)


def serialize_exercises():
	exercises = [
		{
			'label': 'Numbers',
			'exercises': [
				SimpleMultiplication()
			]
		},
		{
			'label': 'Words',
			'exercises': [
				#CountWords()
			]
		}
	]
	print json.dumps(exercises, cls=ExercisesToJSON)


if __name__ == '__main__':
	serialize_exercises()
