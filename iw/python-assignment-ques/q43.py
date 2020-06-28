"""
43. Write a Python program to remove an item from a tuple.
"""

from functions_ex.utils import get_integer


def remove_item(sample_tuple, item):
    """function to remove item from tuple"""
    if item in sample_tuple:
        sample_list = list(sample_tuple)
        sample_list.remove(item)
        return tuple(sample_list)

    else:
        return "Item is not in sample_tuple"


if __name__ == "__main__":
    item_list = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print("Enter item to remove: ")
    item = get_integer()
    result = remove_item(item_list, item)
    print(result)
