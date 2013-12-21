import os.path

from exercises.json_utils import serialize_exercises
from exercises.math_exercises import \
	PiDigit, SimpleMultiplication


def main():
	serialize_exercises(
		os.path.join('web', 'exercises.json'),
		{'label': 'Numbers',
		 'exercises': [
			SimpleMultiplication(),
			PiDigit(),
		 ]},
	)


if __name__ == '__main__':
	main()
