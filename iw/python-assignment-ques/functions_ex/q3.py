"""
3. Write a Python function to multiply all the numbers in a list.
Sample List : (8, 2, 3, -1, 7)
Expected Output : -336
"""
from utils import get_random_list


def multiply_number(sample_list):
    """
    function to multiply all the numbers in a list
    :param sample_list:
    :return: sum after multiplying each item
    """

    mul_num = 1
    for i in sample_list:
        mul_num = mul_num * i

    return mul_num


if __name__ == "__main__":
    sample_list = get_random_list()
    result = multiply_number(sample_list)
    print(result)