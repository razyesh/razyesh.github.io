"""
10. Write a Python program to print the even numbers from a given list.
Sample List : [1, 2, 3, 4, 5, 6, 7, 8, 9]
Expected Result : [2, 4, 6, 8]
"""

from utils import get_random_list


def get_even_list(sample_list):
    even_list = [x for x in sample_list if x%2 == 0]
    return even_list


if __name__ == "__main__":
    sample_list = get_random_list()
    result = get_even_list(sample_list)
    print(result)

