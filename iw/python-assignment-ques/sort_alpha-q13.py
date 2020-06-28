"""
13. Write a Python program that accepts a comma separated sequence of words
as input and prints the unique words in sorted form (alphanumerically).
Sample Words : red, white, black, red, green, black
Expected Result : black, green, red, white,red
"""


# direct method
def sort_word(word_list):
    """
    function to return sorted list alphabetically
    :param word_list:
    :return:
    """
    return sorted(word_list)


if __name__ == "__main__":
    result = sort_word(['ram', 'shyam', 'hari', 'sita'])
    print(result)