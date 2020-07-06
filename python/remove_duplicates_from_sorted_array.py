#from leetcode, easy https://leetcode.com/problems/remove-duplicates-from-sorted-array

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums) -1:
            if nums[i] == nums[i+1] and len(nums) == 2:
                del nums[i+1]
            elif nums[i] == nums[i+1] and i + 1 == len(nums) -1:
                del nums[i+1]
            elif nums[i] == nums[i+1]:
                nums[i+1] = nums[i+2]
                del nums[i+2]
                continue
            else:
                i += 1
                continue
        return len(nums)
    
            
#Understand:       
#edge cases, empsty nums, 2 repeating, 3, equal rpeats, 1 num repeating, repeats at end or beginning
#?'s space limits? is nums always full, what does it mean by in-place?
#Plan:
#set an i = 0,
#loop through nums while < len(nums):
#if nums[i+1] == nums[i]:
    #nums[i+1] = nums[i+2] (May have to change using a pop method here, want to see)
    #
    #continue
#else:
    #i += 1
    #continue
    
#Map out:
#3
#[1,2,3,4,4] 
#[0,0, 1,1,1,2,2,3,3,4]
#[0,0, 1,2,3,3,4]