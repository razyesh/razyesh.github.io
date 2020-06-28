"""
4. Write a Python program to get a single string from two given strings, separated
by a space and swap the first two characters of each string.
Sample String : 'abc', 'xyz'
Expected Result : 'xyc abz'
"""

from functions_ex.utils import get_string


def string_concat_swap(string1, string2):
    """
    function to concat two string and swapping first two character
    :param string1:
    :param string2:
    :return:
    """
    original_string = string1
    for i in range(2):
        string1 = string1.replace(string1[i], string2[i])
        string2 = string2.replace(string2[i], original_string[i])
    
    return string1 + ' ' + string2


if __name__ == "__main__":
    input1 = get_string()
    input2 = get_string()
    result = string_concat_swap(input1, input2)
    print(f"Expected Output: {result}")

