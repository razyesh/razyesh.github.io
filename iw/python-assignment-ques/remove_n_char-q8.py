"""
8. Write a Python program to remove the n
th
index character from a nonempty

string.
"""

from functions_ex.utils import get_string


def remove_n_char(input1, index):
    """
    to remove element from nth index
    :param input1:
    :param index:
    :return:
    """
    split_input1 = list(input1)
    try:
        split_input1.pop(index - 1)
        return split_input1

    except:
        return "The index went beyound character length"


if __name__ == '__main__':
    string_input = get_string()
    index = get_string()
    result = remove_n_char(string_input, int(index))
    print("".join(result))
