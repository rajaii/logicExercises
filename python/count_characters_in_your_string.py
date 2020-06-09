#from codewars 6 kyu https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(string):
    
    storehouse = {}
    
    if len(string) > 0:
    
        for i in range(len(string)):
        
            if string[i] in storehouse:
            
                storehouse[string[i]] += 1
                
            else:
            
                storehouse.update({string[i]: 1})
    
    return storehouse
    
#edge cases emty string= return empty dict; 
#'aba'

#loop through string
#if dict[char] dict[char] += 1
#else dict.add on char: 1

#talk through

#runtime
#space = o(n) worst case have to append n to dict
#time = o(n) have to loop through every string value