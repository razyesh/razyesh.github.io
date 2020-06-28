"""
Write a Python program to get the largest number from a list.

"""


# Bubble Sort Implementation
def find_largest(input1):
    """function to get the largest number from a list"""
    for i in range(len(input1)):
        try:
            if input1[i] > input1[i + 1]:
                temp = input1[i]
                input1[i] = input1[i + 1]
                input1[i + 1] = temp
        except IndexError:
            break

    return input1[-1]


result = find_largest([51, 2, 3, 4, 5, 10])
print(result)
