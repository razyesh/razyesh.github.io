"""
37. Write a Python program to multiply all the items in a dictionary.
"""

from q33 import generate_dict


def multiply_dic_item(dic1):
    """function to multiply all the items in a dictionary"""
    key_mul = 1
    value_mul = 1
    for key, value in dic1.items():
        key_mul = key_mul * key
        value_mul = value_mul * value

    return "Key Multiply: " + str(key_mul), "Value Multiply: "+str(value_mul)


if __name__ == "__main__":
    input_dic = generate_dict()
    result = multiply_dic_item(input_dic)
    print(result)
