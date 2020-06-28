"""
11. Write a Python program to create a lambda function that adds 15 to a given
number passed in as an argument, also create a lambda function that multiplies
argument x with argument y and print the result.
"""

from utils import get_integer

"""
lambda function to add number 15 to given number
"""

add_fifteen = lambda x: x + 15


multiply_two_num = lambda x, y: x * y

if __name__ == "__main__":
    n = get_integer()
    result1 = add_fifteen(n)
    print("For Result Two Enter two number: ")
    n1 = get_integer()
    n2 = get_integer()
    result2 = multiply_two_num(n1, n2)
    print("After adding 15" + str(result1), "After multiplying: " + result2)
