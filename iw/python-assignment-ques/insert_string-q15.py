"""
15. Write a Python function to insert a string in the middle of a string.
Sample function and result :
insert_sting_middle('[[]]<<>>', 'Python') -> [[Python]]
insert_sting_middle('{{}}', 'PHP') -> {{PHP}}

"""

from functions_ex.utils import get_string


def insert_string(braces, input1):
    """function to insert a string in the middle of string"""
    closing_braces = ')]}>'
    index = 0
    if len(braces) % 2 == 0:
        for brace in braces:
            if brace in closing_braces:
                index = braces.index(brace)
                break

    else:
        return 'Invalid Brackets'
    braces = list(braces)
    print(index)
    braces.insert(index, input1)

    return "".join(braces)


if __name__ == "__main__":
    input = get_string()

    result = insert_string('<<>>', input)
    print(result)
