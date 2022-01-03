//from leetcode easy:  https://leetcode.com/problems/largest-number-at-least-twice-of-others

var dominantIndex = function(nums) {
    //tag the max in nums
    const max = Math.max(...nums);
    
    //loop nums and check that max is at least twice as much as all
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] * 2) > max && nums[i] !== max) {
            return -1;
        }
    }
    
    return nums.indexOf(max);
};

//PSEUDO:
//set max = Math.max(...nums);

//loop nums
//if (nums[i] * 2  > max) {
//return -1;
//}

//return nums.indexOf(max);