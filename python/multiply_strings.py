#from leetcode medium: https://leetcode.com/problems/multiply-strings

class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        
        if num1 == 0 or num2 == 0:
            return 0
        
        elif num1 == 1:
            return num2
        
        elif num2 == 1:
            return num1
        
        else:
            num_dict = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
            counter1 = 0
            fin_num1 = 0
            for i in range(len(num1) - 1, -1, -1):
                fin_num1 += num_dict[num1[i]] * (10 ** counter1)
                counter1 += 1
            
            counter2 = 0
            fin_num2 = 0
            for i in range(len(num2) - 1, -1, -1):
                fin_num2 += num_dict[num2[i]] * (10 ** counter2)
                counter2 += 1
                
            return str(fin_num1 * fin_num2)

#PSEUDO     
#edge cases:0 on any, 1 on either 
#?'s' : can use any alu operations?  time/space limitations? can convert into ints with a 
#loop on str? 

#look up: limits on large nums in python

#make hashtable with 0-9
#counter = 0
#fin_num1 = 0
#fin_num2 = 0
#loop through each string backwards
    #match each str with its corresponding dict value * 10 ^ counter and += to fin_numx
    #increment counter
    
#return fin_num1 * fin_num2