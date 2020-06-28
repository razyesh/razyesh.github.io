"""
9. Write a Python program to change a given string to a new string where the first
and last chars have been exchanged.
"""


def exchange_char(input1):
    """function to swap last and first char"""
    original_input = list(input1)
    original_input[0], original_input[-1] = input1[-1], input1[0]
    return "".join(original_input)


result = exchange_char("rajesh")
print(result)