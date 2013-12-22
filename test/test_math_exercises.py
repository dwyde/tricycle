import unittest

from tricycle.math_exercises import PiDigit, SimpleMultiplication

class TestNumberExercises(unittest.TestCase):
	
	def test_simple_multiplication(self):
		exercise = SimpleMultiplication()
		exercise.numbers = [2, 3, 5]
		result = exercise.to_json()
		self.assertEqual(result['solution'], '30')

	def test_pi_digit(self):
		exercise = PiDigit()
		result = exercise.to_json()
		self.assertEqual(result['solution'], '2')

if __name__ == '__main__':
	unittest.main()
