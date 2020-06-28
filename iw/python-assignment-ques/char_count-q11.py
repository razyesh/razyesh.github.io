"""
11. Write a Python program to count the occurrences of each word in a given
sentence.
"""

from functions_ex.utils import get_string


def character_count(sentence_input):
    """function to count number of occurence of character in a sentence"""
    count_character = {}
    for i in sentence:
        if i != ' ':
            if i not in count_character:
                count_character[i] = 1
            else:
                count_character[i] = count_character[i] + 1

    return count_character


if __name__ == "__main__":
    sentence = get_string()
    result = character_count(sentence)
    print(result)
