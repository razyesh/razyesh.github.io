"""
2. Write a Python function to sum all the numbers in a list.
Sample List : (8, 2, 3, 0, 7)
Expected Output : 20
"""
from utils import get_random_list


def sum_item_list(sample_list):
    """
    function to get sum of all item in list
    :param sample_list: sample list
    :return: sum of item
    """
    sum = 0
    for i in sample_list:
        sum = sum + i

    return sum


if __name__ == "__main__":
    sample_list = get_random_list()
    result = sum_item_list(sample_list)
    print("Sum: " + str(result))

