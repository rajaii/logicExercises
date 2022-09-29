//from leet code easy: https://leetcode.com/problems/two-sum

var twoSum = function(nums, target) {
    //double loop nums and check
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

//PSEUDO:

//double loop nums j = i+1
// if (nums[i] + nums[j] === target) {
//return [i,j]
//}