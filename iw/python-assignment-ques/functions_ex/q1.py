"""
1. Write a Python function to find the Max of three numbers.
"""

from utils import get_integer


def find_max(num1, num2, num3):
    """
    function to find the maximum number out of three input numbers

    :param num1: first number
    :param num2: second number
    :param num3: third number
    :return: Maximum out of three numbers

    """
    if num1 > num2 and num1 > num3:
        return "Max: " + str(num1)

    elif num2 > num1 and num2 > num3:
        return "Max: " + str(num2)

    else:
        return "Max: " + str(num3)


if __name__ == "__main__":
    num1 = get_integer()
    num2 = get_integer()
    num3 = get_integer()
    result = find_max(num1, num2, num3)
    print(result)
