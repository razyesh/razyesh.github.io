"""
5. Write a Python program to add 'ing' at the end of a given string (length should
be at least 3). If the given string already ends with 'ing' then add 'ly' instead. If the
string length of the given string is less than 3, leave it unchanged.
Sample String : 'abc'
Expected Result : 'abcing'
Sample String : 'string'
Expected Result : 'stringly'

"""

from functions_ex.utils import get_string


def add_ing(input1):
    """
    function to add ing in any string is it doesn't have else adding ly
    :param input1:
    :return:
    """
    if len(input1)>2:
        if 'ing' in input1:
            return input1 + 'ly'

        else:
            return input1 + 'ing'

    else:
        return input1


if __name__ == "__main__":
    input1 = get_string()
    result = add_ing(input1)
    print("Expected Result: ",result)