//from leetcode: easy: https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
    if (!nums.includes(target)) {
        return -1
    }
    
    return nums.indexOf(target) || -1;
};