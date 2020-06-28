"""
8. Write a Python function that takes a list and returns a new list with unique
elements of the first list.

Sample List : [1,2,3,3,3,3,4,5]
Unique List : [1, 2, 3, 4, 5]
"""
from utils import get_random_list


def get_unique(sample_list):
    """
    to get the new list with unique elements
    :param sample_list: any length list
    :return: new unique list
    """
    unique_list = []
    for i in sample_list:
        if i not in unique_list:
            unique_list.append(i)

    return unique_list


def get_unique_shortcut(sample_list):
    """
    to return unique list using shorcut method
    :param sample_list: any length of non-unique list
    :return: unique list
    """
    return list(set(sample_list))


if __name__ == "__main__":
    sample_list = get_random_list()
    result = get_unique(sample_list)
    print(result)