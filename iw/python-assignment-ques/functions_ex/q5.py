"""
5. Write a Python function to calculate the factorial of a number (a non-negative
integer). The function accepts the number as an argument.
"""
from utils import get_integer


def factorial(num):
    """
    function to calculate factorial of given number
    :param num: sample number
    :return: factorial
    """

    result = 1
    for i in range(1, num+1):
        result = result * i

    return result


if __name__ == "__main__":
    n = get_integer()
    result = factorial(n)
    print(result)
