# from codewars 5kyu https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/python

def isPP(n):
    for i in range(2, n):
        for j in range(2, n):
            if i ** j == n:
                return [i,j]

#first pass timing out so refactor using dict

def isPP(n):
    n_dict = {}
    for i in range(2, n):
        n_dict.update({math.log(n, i): i})
    
    for num in n_dict.values():
        if num - int(num) == 0:
            return [n_dict[num], num]

#still timing out refactor:

def isPP(n):
    for i in range(2, n):
            if math.log(n, i) - int(math.log(n,i)) == 0:
                return [i, int(math.log(n,i))]
    return None



#?'s : always valid input n >0 and n? What to do if n < 0 or not n? Return in array limits on time/space
#edge cases: 1, ret 1, (0 or negs or < 0 => return None) 
 
# log(n, m)===k  if log(n, i) === j: return     [i, j]
#loop double to n from 2
#if i ^ j >n => break both ??
#if i ^ j === n return [i,j]

#works but this test has time contraint :

#build a dict and append values for loop which has i: log(n, i)
#loop through dict and if value is not a decimal, return [key, value]