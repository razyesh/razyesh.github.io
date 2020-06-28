"""
40. Write a Python program to add an item in a tuple.
"""

from functions_ex.utils import get_integer


def add_item_tuple(value, sample_tuple):
    """function to add an item in a tuple"""
    sample_list = list(sample_tuple)
    sample_list.append(value)
    return tuple(sample_list)


if __name__ == "__main__":
    sample_tuple = (1, 2, 3, 4, 5, 6, 7, 8)
    print("Enter the value to add in Tuple ")
    value = get_integer()
    result = add_item_tuple(value, sample_tuple)
    print(result)