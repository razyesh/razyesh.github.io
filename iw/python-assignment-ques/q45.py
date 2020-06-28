"""
45. Write a Python program to find the index of an item of a tuple.
"""

from functions_ex.utils import get_integer, get_random_list


def index_item(sample_tuple, item):
    """function to return index of an item"""
    for i in range(len(sample_tuple)):
        if sample_tuple[i] == item:
            return i
        else:
            return "Item not in the tuple"


if __name__ == "__main__":
    item = get_integer()
    sample_tuple = tuple(get_random_list())
    result = index_item(sample_tuple, item)
    print(result)