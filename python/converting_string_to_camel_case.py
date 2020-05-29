#from codewars 6kyu https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
#solution includes some edge cases that they didn't have; the commented out code

def to_camel_case(text):
    if text == '':
        return text
    new_text = ''
    for i in range(len(text)):
#handle some edge cases that were not in the tests but could arise with variant assumptions
    #case where first is '-' or '_'
#         if text[1] == '-' or text[1] == '_':
#             new_text += text[i+1]
#             continue
    #case where last is '-' or '_'
#         if text[len(text)-1] == '-' or text[len(text)-1] == '_':
#             continue
        if text[i-1] == '-' or text[i-1] == '_':
            continue
        if text[i] == '-' or text[i] == '_':
            new_text += text[i+1].upper()
            continue
        new_text += text[i]
    return new_text