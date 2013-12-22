import os.path

from tricycle.json_utils import serialize_exercises
from tricycle.math_exercises import \
	PiDigit, SimpleMultiplication


def main():
	serialize_exercises(
		os.path.join('web', 'exercises.json'),
		SimpleMultiplication(),
		PiDigit()
	)


if __name__ == '__main__':
	main()
