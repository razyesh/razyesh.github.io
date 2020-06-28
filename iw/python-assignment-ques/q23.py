"""
Write a Python program to check a list is empty or not.
"""


def check_list_empty(input1):
    """function to check if list is empty or not"""
    if len(input1) > 0:
        return "List is not Empty"

    else:
        return "List is Empty"


result = check_list_empty([1, 2])
print(result)
