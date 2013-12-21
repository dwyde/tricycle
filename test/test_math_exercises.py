import unittest

from exercises.math_exercises import PiDigit, SimpleMultiplication

class TestNumberExercises(unittest.TestCase):
	
	def test_simple_multiplication(self):
		exercise = SimpleMultiplication()
		exercise.numbers = [2, 3, 5]
		result = exercise.solve()
		self.assertEqual(result, 30)

	def test_pi_digit(self):
		exercise = PiDigit()
		result = exercise.solve()
		self.assertEqual(result, 2)

if __name__ == '__main__':
	unittest.main()
