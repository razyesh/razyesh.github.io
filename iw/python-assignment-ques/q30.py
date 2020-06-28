"""
30. Write a Python script to check whether a given key already exists in a
dictionary.
"""

from functions_ex.utils import get_integer


def check_key(dict_list, key):
    """function to check whether key exits in dictionary or not"""
    if key in dict_list.keys():
        return True
    else:
        return False


if __name__ == "__main__":
    print("Enter Key to Check: ")
    key = get_integer()
    sample_dict = {1: 23, 2: 24}
    result = check_key(sample_dict, key)
    print(result)
