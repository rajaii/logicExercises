//from leetcode: easy: https://leetcode.com/problems/binary-search/

// var search = function(nums, target) {
//     if (!nums.includes(target)) {
//         return -1
//     }
    
//     return nums.indexOf(target);
// };

//did above in less than a min using build in fncs, will now try to do without them
//edge cases: 1 num in nums, 
//?'s: limits on time/space?

//PSEUDO:

//loop nums
//if nums[i] === target:
//return i

//outside of loop return -1

var search = function(nums, target) {
    //loop nums to check if target is in there
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    return -1
};





