"""
15. Write a Python program to filter a list of integers using Lambda.
"""

"""
lambda function to filter integer from list

"""

filter_list = lambda sample_list: [x for x in sample_list if type(x) == int]

if __name__ == "__main__":
    sample_list = [1, 'ram', 2, 'shyam', 'hari', 11, 14]
    result = filter_list(sample_list)
    print(result)
