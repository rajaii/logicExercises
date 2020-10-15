#from codewars 5kyu https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/python

import re
def alphanumeric(password):
    #handle edge cases
    if password == '' or '_' in password:
        return False
    #set the regex to any nonalphanumeric charachter
    regex = '\W'
    #if there is no match return True else return False
    if re.search(regex, password) == None:
        return True
    else:
        return False
    
#edge cases: empty string, string with 1 value, all valid and last not
#?'s: can we import regex module re? limits on time/space, limits on input besides not being NOne

#import re
#set the regex pattern to find anything that is not alphanumeric ie \W
#if match of regex to pw, return false
#else return true