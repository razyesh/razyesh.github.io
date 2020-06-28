"""
Write a Python program to get the smallest number from a list.
"""

sample_input = [11, 4, 2, 3, 6, 1, 0]


def find_smallest(input1):
    """
    function to find the smmallest number from the list
    :param input1:
    :return:
    """
    new_list = [input1[0]]
    for i in range(len(input1)):
        if new_list[0] > input1[i]:
            new_list.insert(0, input1[i])

    return new_list[0]


result = find_smallest(sample_input)
print(result)
