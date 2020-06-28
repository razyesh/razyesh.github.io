"""
36. Write a Python program to sum all the items in a dictionary.
"""

from q32 import get_dict
from functions_ex.utils import get_integer

def return_sum(dic1):
    """function to sum all the items in a dictionary"""
    key_sum = 0
    value_sum = 0
    for key, value in dic1.items():
        key_sum = key + key_sum
        value_sum = key + value_sum

    return key_sum, value_sum


if __name__ == "__main__":
    n = get_integer()
    get_dic1 = get_dict(n)
    result = return_sum(get_dic1)
    print(result)