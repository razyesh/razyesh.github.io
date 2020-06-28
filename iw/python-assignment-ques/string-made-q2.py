"""

2. Write a Python program to get a string made of the first 2 and the last 2 chars
from a given a string. If the string length is less than 2, return instead of the
empty string.
Sample String : 'Python'
Expected Result : 'Pyon'
Sample String : 'Py'
Expected Result : 'PyPy'
Sample String : ' w'
Expected Result : Empty String

"""

from functions_ex.utils import get_string


def new_string(string):
    if len(string) < 2:
        return "Empty String"

    elif len(string) == 2:
        return string + string

    else:
        return string[:2] + string[-2:]


if __name__ == "__main__":
    user_string = get_string()
    result = new_string(user_string)
    print(result)
