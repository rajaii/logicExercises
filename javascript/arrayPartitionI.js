//  from leetCode easy: https://leetcode.com/problems/array-partition-i

var arrayPairSum = function(nums) {
    nums.sort((a, c) => a-c);
    let max = 0;
    for (let i = 0; i < nums.length; i += 2) {
        max += nums[i];
    }
    return max; 
    
};