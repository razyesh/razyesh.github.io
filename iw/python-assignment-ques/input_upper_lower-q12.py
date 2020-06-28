"""
12. Write a Python script that takes input from the user and displays that input
back in upper and lower cases.
"""

from functions_ex.utils import get_string


def convert_case(input1):
    """function to count number of upper and lower case in string"""
    return "Upper:" + input1.upper(), "Lower: " + input1.lower()


if __name__ == "__main__":
    input_string = get_string()
    result = convert_case(input_string)
    print(result)
