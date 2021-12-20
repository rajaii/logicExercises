//from leetcode easy: https://leetcode.com/problems/maximum-difference-between-increasing-elements

var maximumDifference = function(nums) {
    //set max to 0 and double loop nums checking if nums[j] > nums[i] && nums[j] - nums[i] > max
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] > nums[i] && nums[j] - nums[i] > max ) {
                max = nums[j] - nums[i];
            }
        }
    }
    
    return max || -1;
};

//set max

//double loop nums
//if (nums[j] > nums[i] && nums[j] - nums[i] > max ) {
//max = nums[j] - nums[i];
//}

//return max || -1