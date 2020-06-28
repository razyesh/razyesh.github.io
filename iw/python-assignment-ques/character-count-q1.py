""" 

1. Write a Python program to count the number of characters (character
frequency) in a string. Sample String : google.com'
Expected Result : {'o': 3, 'g': 2, '.': 1, 'e': 1, 'l': 1, 'm': 1, 'c': 1}

"""

from functions_ex.utils import get_string


def count_character(string):
    """function to count number of occurence of character"""
    character_count = {}
    for i in string:
        if i not in character_count:
            character_count[i] = 1

        else:
            character_count[i] = character_count[i] + 1 

    return character_count


if __name__ == "__main__":
    string_input = get_string()
    result = count_character(string_input)
    print(result)