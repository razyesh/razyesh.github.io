"""
39. Write a Python program to unpack a tuple in several variables.
"""

import string


def upack_tuple_variable(input_tuple):
    """function to upack a tuple in several variables"""
    variables = string.ascii_lowercase[:len(input_tuple)]
    variable_list = list(variables)
    result = {}
    for i in range(len(input_tuple)):
        result[variable_list[i]] = input_tuple[i]

    return result


if __name__ == "__main__":
    sample_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    if len(sample_tuple) > 26:
        print("Sorry for now we only accept tuple length of 26")

    else:
        result = upack_tuple_variable(sample_tuple)
        print(result)
