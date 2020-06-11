#from codewars 6kyu https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
    ret_str = ''
    let_dict = {'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5', 'f': '6', 'g': '7',
    'h': '8','i': '9', 'j': '10', 'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15',
    'p': '16', 'q': '17', 'r': '18','s': '19', 't': '20', 'u': '21', 'v': '22', 
    'w': '23', 'x': '24', 'y': '25', 'z': '26'}
    new_text = text.lower()
    for i in range(len(new_text)):
        if new_text[i] not in let_dict:
            continue
        elif i == len(new_text) - 1:
            ret_str += let_dict[new_text[i]]
        else:
            ret_str += f'{let_dict[new_text[i]]} '
    return ret_str
    
#edge cases empty all non letter return '' or null?

#questions limits on inputs?, on time/space?, ^


#set empt str
#make a hash table with letter key num values
#sting to lower
#loop string and concat with emt str with space at end except on last iteration
#if not in dict skip