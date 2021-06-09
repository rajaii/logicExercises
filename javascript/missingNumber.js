//  from leetcode easy: https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    //  handle edge cases
    if (nums.length === 1) {
        if (nums[0] === 0) {
            return 1;
        }
        return 0;
    }
    
    //  sort nums
    nums.sort((a,b) => a - b);
    
    //  loop nums and find missing element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1 && nums[i +1] !== undefined) {
            return nums[i] + 1;
        }
    }
    
    if (nums[0] === 0) {
        return nums[nums.length - 1] + 1;
    }
    return 0;
};

//edge cases: 0 missing, 

//PSEUDO
//sort nums
//handle edge cases
//loop nums and if nums[i+1] !== nums[i] + 1
//return nums[i] + 1

//out of loop:
//return 0