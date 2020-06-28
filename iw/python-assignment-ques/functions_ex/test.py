import unittest

from q1 import find_max
from q2 import sum_item_list
from q3 import multiply_number
from q4 import reverse_string
from q5 import factorial
from q6 import check_num_range
from q7 import count_upper_lower
from q8 import get_unique
from q9 import check_prime
from q10 import get_even_list


class TestFunctionAssignment(unittest.TestCase):
    def test_max(self):
        self.assertEqual(find_max(1, 10, 5), "Max: "+str(10))

    def test_sum_item_list(self):
        self.assertEqual(sum_item_list([1, 2, 3]), 6)

    def test_multiply_list_num(self):
        self.assertEqual(multiply_number([1, 2, 3]), 6)

    def test_reverse_string(self):
        self.assertEqual(reverse_string('string'), 'gnirts')

    def test_factorial(self):
        self.assertEqual(factorial(3), 6)

    def test_check_num_range(self):
        self.assertTrue(check_num_range([1, 2, 3], 3))

    def test_count_upper_lower(self):
        self.assertEqual(count_upper_lower('Abc'), ("No. of Upper case characters: 1", "No. of Lower case characters: 2"))

    def test_get_unique(self):
        self.assertEqual(get_unique([1, 1, 2, 3]), [1, 2, 3])

    def test_check_prime(self):
        self.assertEqual(check_prime(97), 'Prime')

    def test_get_even_list(self):
        self.assertEqual(get_even_list([2, 4, 5, 9]), [2, 4])


if __name__ == "__main__":
    unittest.main()