import random


def get_string():
    user_input = input("Enter any character length string: ")
    return user_input


def get_integer():
    user_input = int(input("Enter the integer value: "))
    return user_input


def get_random_list():
    sample_list = []
    for i in range(10):
        sample_list.append(random.randrange(0, 101))

    return sample_list


