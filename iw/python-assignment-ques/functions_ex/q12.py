"""
12. Write a Python program to create a function that takes one argument, and
that argument will be multiplied with an unknown given number.
"""

import random
from utils import get_integer

def multiply_with_num(n):
    """
    function to multipy n with unknown number
    :param n:
    :return:
    """
    unknown_num = random.randrange(1, 101)
    print(f"{n} multiplied by {unknown_num}")
    return unknown_num * n


if __name__ == "__main__":
    n = get_integer()
    result = multiply_with_num(n)
    print(result)