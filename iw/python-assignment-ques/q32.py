"""
32. Write a Python script to generate and print a dictionary that contains a
number (between 1 and n) in the form (x, x*x).
Sample Dictionary ( n = 5) :
Expected Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
"""

from functions_ex.utils import get_integer


def get_dict(n):
    """function to generate and print a dictionary that contains a
        number (between 1 and n) in the form (x, x*x)"""
    sample_dict = {}
    for i in range(1, n + 1):
        sample_dict[i] = i * i

    return sample_dict


if __name__ == "__main__":
    n = get_integer()
    result = get_dict(n)
    print(result)
