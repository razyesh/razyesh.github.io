"""
44. Write a Python program to slice a tuple.
"""

from functions_ex.utils import get_integer, get_random_list


def slice_tuple(sample_tuple, start, end):
    """function to slice tuple"""
    return sample_tuple[start:end]


if __name__ == "__main__":

    sample_tuple = tuple(get_random_list())
    start = get_integer()
    end = get_integer()
    result = slice_tuple(sample_tuple, start, end)
    print(result)