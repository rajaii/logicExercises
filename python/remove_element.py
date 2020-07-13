#from leetcode easy: https://leetcode.com/problems/remove-element/

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        counter = 0
        
        while counter < len(nums):
            if nums[counter] == val:
                nums.remove(nums[counter])
                continue
            else:
                counter += 1
                
        
        return len(nums)
        
        
#edge cases: all same, one different val, one different not val
#?'s limits on time? will nums always have nums in it

#loop through nums
#if nums[i]== val:
#list.remove(nums[i])
# return len(list)

#for loop didn't work so refactor into while loop LESSON:
#for loop will run the len(nums) when assessing how to iterate and iterate based off of #that; this won't work if I am mutating the array to be looped through so I made a while #loop with an iterator that iterates only when not removing elements
#mutating the array so have to make a while loop 

#map out:

# [3,2,2,3]0
# [2, 2,3]0
# [2,2, 3]1
# [2,2,]2 c = len(nums)
#edges
#val = 1 V
#[1,1,2]0
#[1,2]0
#[2]0
#[2]1

#val = 2 V
#[1, 1,2]
#[1,1, 2]1
#[1,1,2 ]2
#[1,1]2
