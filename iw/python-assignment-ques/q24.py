"""
24. Write a Python program to clone or copy a list.
"""


def clone_list(input_list):
    """function to return copy of input_list"""
    return input_list.copy()


if __name__ == "__main__":
    sample_list = [1, 2, 3]
    result = clone_list(sample_list)
    print("Original List Memory ID: ", id(sample_list))
    print("Copy List Memory ID: ", id(result))