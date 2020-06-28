"""
21. Write a Python program to get a list, sorted in increasing order by the last
element in each tuple from a given list of non-empty tuples.
Sample List : [(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]

Expected Result : [(2, 1), (1, 2), (2, 3), (4, 4), (2, 5)]
"""

def sort_list(input1):
    """function to sort list on the basis of 2nd element"""
    for i in range(len(input1)):
        print(input1)
        try:
            if input1[i][1] > input1[i + 1][1]:
                temp = input1[i][1]
                input1[i] = input1[i + 1]
                input1[i + 1] = temp
        except IndexError:
            pass

    return input1


result = sort_list([(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)])
print(result)