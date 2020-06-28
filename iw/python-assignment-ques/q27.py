"""
27. Write a Python program to replace the last element in a list with another list.
Sample data : [1, 3, 5, 7, 9, 10], [2, 4, 6, 8]
Expected Output: [1, 3, 5, 7, 9, 2, 4, 6, 8]
"""


def replace_last_item(list1, list2):
    """function to replace last element with another list"""
    list1.pop(-1)
    for i in list2:
        list1.append(i)

    return list1


if __name__ == "__main__":
    sample_list1 = [1, 3, 5, 7, 9, 10]
    sample_list2 = [2, 4, 6, 8]
    result = replace_last_item(sample_list1, sample_list2)
    print(result)
