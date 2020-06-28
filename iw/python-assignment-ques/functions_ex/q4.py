"""
4. Write a Python program to reverse a string.
Sample String : "1234abcd"
Expected Output : "dcba4321"
"""
from utils import get_string

def reverse_string(sample_string):
    """
    this function return the reverse of any string
    :param sample_string: sample of any string
    :return: reverse of string
    """

    return sample_string[::-1]


if __name__ == "__main__":
    sample_string = get_string()
    result = reverse_string(sample_string)
    print(result)