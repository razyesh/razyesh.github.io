"""
34. Write a Python script to merge two Python dictionaries.
"""
from q33 import generate_dict
from q32 import get_dict


def merge_dict(dic1, dic2):
    """function to merge two python dictionaries"""
    for key, value in dic2.items():
        if key not in dic1:
            dic1[key] = value

    return dic1


if __name__ == "__main__":
    dic1 = generate_dict()
    dic2 = get_dict(5)
    result = merge_dict(dic1, dic2)
    print(result)
