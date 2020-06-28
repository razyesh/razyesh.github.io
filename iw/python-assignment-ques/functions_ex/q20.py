"""
20. Write a Python program to find intersection of two given arrays using
Lambda.
"""

from utils import get_random_list

"""
lambda function to find intersection between two arrays
"""

find_intersection = lambda x, y : set(x).intersection(set(y))


if __name__ == "__main__":
    sample_list1 = get_random_list()
    sample_list2 = get_random_list()

    result = find_intersection(sample_list1, sample_list2)
    if result:
        print(list(result))
    else:
        print("No Intersection element")