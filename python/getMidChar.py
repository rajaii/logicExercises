#codewars 7kyu https://www.codewars.com/kata/56747fd5cb988479af000028/solutions/python
#get middle charachter of the string:

def get_middle(s):
    if len(s) <= 2:
        return s
    if len(s) % 2 == 0:
        return f'{s[(len(s)//2) -1]}{s[len(s)//2]}'
    else:
        return f'{s[int(len(s)/2)]}'
