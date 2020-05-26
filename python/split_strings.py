#from codewars 6 kyu https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):
    arr = []
    counter = 0
    pair_str = ''
    for i in range(len(s)):
        counter += 1
        pair_str += s[i]
        if counter % 2 == 0:
            arr.append(pair_str)
            pair_str = ''
            counter = 0
        if i == len(s) - 1 and counter % 2 != 0:
            pair_str += '_'
            arr.append(pair_str)
        
            
    
    return arr