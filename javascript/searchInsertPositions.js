//from leetcode easy: https://leetcode.com/problems/search-insert-position

var searchInsert = function(nums, target) {
    //handle case where target < all nums
    if (target < nums[0]) {
        return 0;
    }
    
    //loop nums to see if target is in there
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    //loop nums to see if target would go in there
    for (let i = 0; i < nums.length - 1; i++) {
        if (target > nums[i] && target < nums[i+1]) {
            return i + 1;
        }
    }
    
    //handle case where target is greatr than all nums
    return nums.length;
};

//edge cases: negatives, all negative and trget positive, nums.length === 1, target > //nums[nums.length-1]
//?'s: limits on time or space?

//PSEUDO:

//handle case where target is less than all nums
//if (target < nums[0])
//return 0

//loop nums
//if nums[i] === target:
//return i

//loop nums to nums.length - 1
//if (target > nums[i] && target < nums[i+1]):
//return i + 1

//case if its greater than all nums
//return nums.length - 1 

