"""
7. Write a Python function that accepts a string and calculate the number of
upper case letters and lower case letters.
"""


def count_upper_lower(sample_string):
    """
    function to count number of upper and lower case letter in given string
    :param sample_string:
    :return: counted number
    """
    count_upper = 0
    count_lower = 0
    for i in sample_string:
        if i != " ":
            if i == i.lower():
                count_lower += 1
            else:
                count_upper += 1

    return "No. of Upper case characters: "+str(count_upper), "No. of Lower case characters: "+str(count_lower)


if __name__ == "__main__":
    sample_string = 'The quick Brow Fox'
    result = count_upper_lower(sample_string)
    print(result)
