"""
25. Write a Python program to check whether all dictionaries in a list are empty or
not.

Sample list : [{},{},{}]
Return value : True

Sample list : [{1,2},{},{}]
Return value : False
"""


def check_empty_dict(input_list):
    """function to check if dictionery inside list are all empty or not"""
    count = 0
    for i in input_list:
        if i == {}:
            count += 1

    if count == len(input_list):
        return True
    else:
        return False


if __name__ == "__main__":
    result1 = check_empty_dict([{},{},{}])
    result2 = check_empty_dict([{1,2}, {}, {}])
    print(result1, result2)