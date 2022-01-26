//from leetcode easy: https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};

//PSEUDO
//loop nums twice
//if (nums[i] === nums[j] && Math.abs(i - j <= k))
//return true