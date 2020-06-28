"""
Write a Python program to multiplies all the items in a list.
"""

from functions_ex.utils import get_integer


def multiply_item(input1):
    """function to multiply all the item in a list"""
    total = 1
    for i in input1:
        total = total * i

    return total


if __name__ == "__main__":
    list_length = int(input("Enter the length of string: "))
    input_list = []
    for i in range(list_length):
        get_input = get_integer()
        input_list.append(get_input)

    result = multiply_item(input_list)
    print("Multiplication", result)
