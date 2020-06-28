"""
13. Write a Python program to sort a list of tuples using Lambda.
"""

from utils import get_random_list


"""
lambda function to sort tuple

"""

sort_tuple = lambda sample_tuple : sorted(sample_tuple)


if __name__ == "__main__":
    sample_tuple = tuple(get_random_list())
    result = sort_tuple(sample_tuple)
    print(tuple(result))