# weird string case from codewars 6 kyu
#  https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/python

def to_weird_case(string):
    #TODO
    new_str = ''
    word_index = 0
    current_index = 0
    
    while current_index != len(string):  
        print(f'word_index: {word_index}, stringval: {string[current_index]} ')
        if string[current_index] == ' ':
            new_str += ' '
            current_index += 1
            word_index = 0
            continue
        elif word_index == 0:
            new_str += string[current_index].upper() 
        elif word_index == 1:    
            new_str += string[current_index].lower() 
        elif word_index % 2 == 0:
            new_str += string[current_index].upper()
        elif word_index %2 == 1:
            new_str += string[current_index].lower()
        current_index += 1
        word_index += 1
      
    return new_str
        

#edge cases empty string: return '', #0== e 1==odd
#
#'01234 012345 0123  word index
#'Weird String case'
#'0123456789...
#if word index is 0, 1,  even upper, odd: lower
###################################################

#set word index, current_index (while is not leng(str)), 
#while current_index != len(string):   
    #if string[current_index] == ' ':
        #new_str += ' '
        #current_index += 1
        #word_index == 0
        #continue
    #elif word_index == 0:
        #new_str += string[current_index].upper(), 
    #elif word_index == 1:    
        #new_str += string[current_index].lower() 
    #elif word_index % 2 == 0:
        #new_str += string[current_index].upper()
    #elif word_index %2 == 1:
        #new_str += string[current_index].lower()
    #current_index += 1
    #word_index += 1
    
#123456789abcde  c_i
#this is a test
#0123 01 0 0123 w_i
#