"""
18. Write a Python program to check whether a given string is number or not
using Lambda.
"""

"""
lambda function to return true if given string is integer else return false
"""

check_digit = lambda input1 : input1.isdigit()

if __name__ == "__main__":
    input1 = input("Enter any string to confirm: ")
    result = check_digit(input1)
    print(result)