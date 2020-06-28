"""
28. Write a Python script to add a key to a dictionary.

Sample Dictionary : {0: 10, 1: 20}
Expected Result : {0: 10, 1: 20, 2: 30}
"""

from functions_ex.utils import get_integer


def add_key_value(key, value, sample_dict):
    """function to add a key to a dictionary"""
    sample_dict[key] = value
    return sample_dict


if __name__ == "__main__":
    sample_dict = {0: 10, 1: 20}
    print("Enter Key: ")
    get_key = get_integer()
    print("Enter Value: ")
    get_value = get_integer()
    result = add_key_value(get_key, get_value, sample_dict)
    print(result)
