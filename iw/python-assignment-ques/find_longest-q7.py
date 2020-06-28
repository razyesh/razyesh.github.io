"""
7. Write a Python function that takes a list of words and returns the length of the
longest one.

"""

sample_input = "Write a Python function that takes a list of words and returns the length of the longest one"


def find_longest(word_list):
    """
    to find the longest length of string from given word_list
    :param word_list:
    :return:
    """

    if type(word_list) != list:
        word_list = word_list.split(" ")
    word_list_length_count = {}
    for i in word_list:
        if i not in word_list_length_count:
            word_list_length_count[i] = len(i)
    highest_count_word = sorted(set(word_list_length_count.values()), reverse=True)
    highest_length_count = {}
    for i in word_list:
        if len(i) == highest_count_word[0]:
            highest_length_count[i] = len(i)
    return highest_length_count


result = find_longest(sample_input)
print(result)
