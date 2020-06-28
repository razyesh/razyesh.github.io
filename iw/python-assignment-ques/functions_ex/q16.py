"""
16. Write a Python program to square and cube every number in a given list of
integers using Lambda.
"""
from utils import get_random_list


"""
lambda function to return square and cube from given sample list

"""
square_cube = lambda sample_list : [(x**2, x**3) for x in sample_list]

if __name__ == "__main__":
    sample_list = get_random_list()
    result = square_cube(sample_list)
    print(result)
