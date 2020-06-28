"""
6. Write a Python function to check whether a number is in a given range.
"""

from utils import get_random_list, get_integer

def check_num_range(sample_range, num):
    """
    function to check whether given number is in sample_range or not
    :param sample_range: range
    :param num: number to check
    :return: true if num is in sample range else false
    """

    if num in sample_range:
        return True
    else:
        return False


if __name__ == "__main__":
    sample_range = get_random_list()
    num = get_integer()
    result = check_num_range(sample_range, num)
    print(result)