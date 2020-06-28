"""
22. Write a Python program to remove duplicates from a list.
"""

sample_input = [1, 2, 3, 4, 5, 1, 3, 2]


def remove_duplicate(input1):
    """function to remove duplicate from list"""
    return list(set(input1))


result = remove_duplicate(sample_input)
print(result)