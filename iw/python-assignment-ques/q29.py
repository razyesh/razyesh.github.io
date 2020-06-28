"""
29. Write a Python script to concatenate following dictionaries to create a new
one.

Sample Dictionary :
dic1={1:10, 2:20}
dic2={3:30, 4:40}
dic3={5:50,6:60}
Expected Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
"""


def concat_dict(*args):
    """function to merge dictionaries"""
    concatenated_dict = {}
    for i in args:
        for key, value in i.items():
            if key not in concatenated_dict:
                concatenated_dict[key] = value

    return concatenated_dict


if __name__ == "__main__":
    dic1 = {1: 10, 2: 20}
    dic2 = {3: 30, 4: 40}
    dic3 = {5: 50, 6: 60}
    result = concat_dict(dic1, dic2, dic3)
    print(result)
