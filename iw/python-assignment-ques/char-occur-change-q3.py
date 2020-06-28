"""
3. Write a Python program to get a string from a given string where all
occurrences of its first char have been changed to '$', except the first char itself.
Sample String : 'restart'
Expected Result : 'resta$t'

"""

from functions_ex.utils import get_string


def char_occurence_update(string):
    """
    to change all occurence of string to $
    :param string:
    :return:
    """
    for i in string:
        if i == string[0]:
            updated_string = string.replace(i, '$')

    updated_string = updated_string.replace('$', string[0], 1)
    return updated_string


if __name__ == "__main__":
    string = get_string()
    result = char_occurence_update(string)
    print(result)