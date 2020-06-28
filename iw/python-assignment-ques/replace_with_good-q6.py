"""
6. Write a Python program to find the first appearance of the substring 'not' and
'poor' from a given string, if 'not' follows the 'poor', replace the whole 'not'...'poor'
substring with 'good'. Return the resulting string.
Sample String : 'The lyrics is not that poor!'
'The lyrics is poor!'
Expected Result : 'The lyrics is good!'
'The lyrics is poor!'

"""


def filter_string(input1):
    """
    function to replace with good
    :param input1:
    :return:
    """
    sample_input = input1.split(" ")
    if 'not' in input1 and 'poor' in input1:
        try:
            index_of_not = sample_input.index('not')
            index_of_poor = sample_input.index('poor!')
            follow_string = " ".join(sample_input[index_of_not:index_of_poor + 1])
            if follow_string:
                return " ".join(sample_input[:index_of_not]) + " good"

        except ValueError:
            return "not is not followed by Poor"


result = filter_string("The lyrics is not that poor!")
print(result)
