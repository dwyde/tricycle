from exercises.json_utils import serialize_exercises
from exercises.math_exercises import \
	PiDigit, SimpleMultiplication


if __name__ == '__main__':
	print serialize_exercises(
		{'label': 'Numbers',
		 'exercises': [
			SimpleMultiplication(),
			PiDigit(),
		 ]},
	)
	
