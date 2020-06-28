"""
46. Write a Python program to find the length of a tuple
"""
from functions_ex.utils import get_random_list

def find_length(sample_tuple):
    count = 0
    for _ in sample_tuple:
        count +=1

    return count


if __name__ == "__main__":
    sample_tuple = tuple(get_random_list())
    result = find_length(sample_tuple)
    print(result)