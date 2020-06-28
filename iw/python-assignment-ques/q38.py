"""
38. Write a Python program to remove a key from a dictionary.
"""

from q33 import generate_dict
from functions_ex.utils import get_integer, get_string


def remove_key(remove_key, dic1):
    """function to remove key from a dictionery"""
    new_dic = {}
    for key, value in dic1.items():
        if key == remove_key:
            pass
        else:
            new_dic[key] = value

    return new_dic


if __name__ == "__main__":
    key_type = input("Please define type of key (s=string or i=integer): ")
    print("Enter the key to remove from dict: ")
    if key_type == 's':
        key = get_string()
    elif key_type == 'i':
        key = get_integer()
    dic1 = generate_dict()
    result = remove_key(key, dic1)
    print(result)
