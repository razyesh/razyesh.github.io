"""
42. Write a Python program to convert a list to a tuple.
"""


def convert_tuple(sample_list):
    """function to convert list to a tuple"""
    return tuple(sample_list)


if __name__ == "__main__":
    sample_list = [1, 2, 3, 4, 5, 6, 7, 8]
    result = convert_tuple(sample_list)
    print(result)
