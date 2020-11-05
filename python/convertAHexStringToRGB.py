#from codewars 5kyu https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/python

def hex_string_to_RGB(hex_string): 
    #set the dict to add values into, and r g anb b strings
    rgb = {}
    r = hex_string[1:3]
    g = hex_string[3:5]
    b = hex_string[5:]
    
    #append appropriate values to dict and return it
    rgb['r'] = int(r, 16)
    rgb['g'] = int(g, 16)
    rgb['b'] = int(b, 16)
    
    return rgb
   
#
#make ret_dict = {}
#break up hex string into its respectve r g anb b
#run int(slice, 16) and put into corresponding ret_dict properties
#return ret_dict