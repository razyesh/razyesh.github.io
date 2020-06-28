import random


def get_string():
    """function to get the string as input from user"""

    user_input = input("Enter any character length string: ")
    return user_input


def get_integer():
    """function to get the integer as input from user"""

    user_input = int(input("Enter the integer value: "))
    return user_input


def get_random_list():
    """function to get the random list of range 10"""

    sample_list = []
    for i in range(10):
        sample_list.append(random.randrange(0, 101))

    return sample_list


