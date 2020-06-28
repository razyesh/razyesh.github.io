"""
14. Write a Python program to sort a list of dictionaries using Lambda.
"""


"""
lambda function to sort dictionery

"""
sort_dict = lambda sample_dict : sorted(sample_dict.keys())

if __name__ == "__main__":
    sample_dict = {1:5, 2:7, 5:9, 4:10, 3:11, 12:14, 9:8}
    result = sort_dict(sample_dict)
    sorted_dict = {}
    for i in result:
        sorted_dict[i] = sample_dict[i]

    print(sorted_dict)
