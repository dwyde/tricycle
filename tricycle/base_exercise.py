import abc


class Exercise(object):
	""" The abstract base class for all exercises.
	
	Required attributes:
	
	- title: a unique, human-readable label for this exercise
	- problem: a question or challenge for the user to solve
	- hint: a hint
	- solve(): a method that returns a solution or list of solutions
	"""
	
	__metaclass__ = abc.ABCMeta
	
	@abc.abstractmethod
	def solve(self):
		pass
		
	def to_json(self):
		""" Serialize an exercise to a JavaScript-friendly format. """
		solution = str(self.solve())
		return {
			'solution': solution,
			'title': self.title,
			'problem': self.problem,
			'hints': self.hint,
		}

