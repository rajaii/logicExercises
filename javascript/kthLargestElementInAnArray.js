//from leetcode medium https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {
    nums.sort((x,y) => x - y);
    return nums[nums.length - k]
};

//questions: limits on time/space,
//edge cases: nums.length === k, all same value, 

//sort nums,
//return nums[nums.length -k]

//[1,2,5,7,4] nums k = 3
//[1,2,4,5,7]
//5-3 === 2