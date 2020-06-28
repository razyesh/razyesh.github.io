"""
Write a Python program to sum all the items in a list.
"""
from functions_ex.utils import get_integer


def get_sum(input_list):
    """
    function to sum all the items in list
    :param input_list:
    :return:
    """

    total = 0
    for i in input_list:
        if type(i) == int:
            total = total + i

    return total


if __name__ == "__main__":
    length_of_string = int(input("Enter the length of list to sum : "))
    input_list = []
    for _ in range(length_of_string):
        get_list_item = get_integer()
        input_list.append(get_list_item)

    result = get_sum(input_list)
    print("SUM: ", result)
