import unittest

from exercises.math_exercises import SimpleMultiplication

class TestNumberExercises(unittest.TestCase):
	
	def test_simple_multiplication(self):
		s = SimpleMultiplication()
		s.numbers = [2, 3, 5]
		result = s.solve()
		self.assertEqual(result, 30)


if __name__ == '__main__':
	unittest.main()
