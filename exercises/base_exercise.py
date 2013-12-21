import abc


class Exercise(object):
	""" The abstract base class for all exercises.
	
	Required attributes:
	
	- title: a human-readable label for this exercise
	- problem: a question or challenge for the user to solve
	- hints: a list of hints
	- solve(): a method that returns a solution or list of solutions
	"""
	
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

