"""
17. Write a Python program to find if a given string starts with a given character
using Lambda.
"""

from utils import get_string

"""
lambda function return true if it starts with given input character else false
"""


check_string = lambda string_input, input_character : True if string_input.startswith(input_character) else False


if __name__ == "__main__":
    input_string = get_string()
    print("Enter character to confirm: ")
    input_char = get_string()
    result = check_string(input_string, input_char)
    print(result)