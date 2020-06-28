"""
10. Write a Python program to remove the characters which have odd index
values of a given string.
"""

from functions_ex.utils import get_string


def remove_character(string1):
    """
    function to remove value of odd index from given string
    :param string1:
    :return:
    """
    string1_convert = list(string1)
    for i in string1_convert:
        if (string1_convert.index(i)+1) % 2 != 0:
            string1_convert.pop(string1_convert.index(i))

    return "".join(string1_convert)


if __name__ == "__main__":
    input1 = get_string()
    result = remove_character(input1)
    print(result)