"""
41. Write a Python program to convert a tuple to a string.
"""


def convert_tuple_string(sample_tuple):
    """function to convert tuple to string"""
    sample_list = list(sample_tuple)
    return " ".join(sample_list)


if __name__ == "__main__":
    sample_tuple = ('Write', 'a', 'Python', 'program', 'to', 'convert', 'a', 'tuple', 'to', 'a', 'string')
    result = convert_tuple_string(sample_tuple)
    print(result)