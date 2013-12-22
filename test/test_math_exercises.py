import unittest

from tricycle.math_exercises import PiDigit, SimpleMultiplication

class TestNumberExercises(unittest.TestCase):
	
	def check_answer(self, exercise, value):
		result = exercise.to_json()
		self.assertEqual(result['solution'], str(value))
	
	def test_simple_multiplication(self):
		exercise = SimpleMultiplication()
		exercise.numbers = [2, 3, 5]
		self.check_answer(exercise, 30)

	def test_pi_digit(self):
		exercise = PiDigit()
		self.check_answer(exercise, 2)

if __name__ == '__main__':
	unittest.main()
