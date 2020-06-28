"""
31. Write a Python program to iterate over dictionaries using for loops.
"""


def iterate_dict(sample_dict):
    """function to iterate over dictionaries"""
    for key, value in sample_dict.items():
        print(key, value)


if __name__ == "__main__":
    sample_dict = {1: 20, 2: 30, 4: 50}
    iterate_dict(sample_dict)
