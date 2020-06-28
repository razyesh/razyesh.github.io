"""
14. Write a Python function to create the HTML string with tags around the
word(s).
Sample function and result :

add_tags('i', 'Python') -> '<i>Python</i>'
add_tags('b', 'Python Tutorial') -> '<b>Python Tutorial </b>'

"""


def create_html(html_tag, input_value):
    """function to create the html string"""
    if html_tag:
        start_tag = '<' + html_tag + '>'
        end_tag = '</' + html_tag + '>'

    if start_tag and end_tag and input_value:
        end_result = start_tag + input_value + end_tag

        return end_result


result = create_html('i', 'Python')
print(result)
