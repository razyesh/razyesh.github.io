"""
20. Write a Python program to count the number of strings where the string
length is 2 or more and the first and last character are same from a given list of
strings.
Sample List : ['abc', 'xyz', 'aba', '1221']
Expected Result : 2

"""


def get_result(input1):
    """
    to count the number of strings where the string
    length is 2 or more and the first and last character are same from a given list of
    strings
    :param input1:
    :return:
    """
    count = 0
    for i in input1:
        if len(i) > 1:
            if i[0] == i[-1]:
                count += 1

    return count


if __name__ == "__main__":
    sample_list = ['abc', 'xyz', 'aba', '1221', '44']
    result = get_result(sample_list)
    print("Counted String: ", result)
