"""
26. Write a Python program to insert a given string at the beginning of all items in
a list.

Sample list : [1,2,3,4], string : emp
Expected output : ['emp1', 'emp2', 'emp3', 'emp4']
"""

from functions_ex.utils import get_string


def append_string(sample_list, string):
    """function to append string is integer list"""
    new_list = []
    for i in sample_list:
        i = string + str(i);
        new_list.append(i)

    return new_list


if __name__ == "__main__":
    sample_list = [1, 2, 3, 4]
    string = get_string()
    result = append_string([1, 2, 3, 4], string)
    print(result)
