#from codewars 6kyu: https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/python

def digital_root(n):
    n_split = [int(n) for n in str(n)]
    if len(n_split) == 1:
        return n
    
    Sum = sum(n_split)
    return digital_root(Sum)
    
    
#edge cases 0 or single dig nums, return num
#limits on space?time? is there an input limit?  

#recursion:
#base case if length n.split == 1:

#to get there sum up the split n and recursively call the fn passing it in 