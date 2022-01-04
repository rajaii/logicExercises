//from leetcode medium: https://leetcode.com/problems/sort-colors/

var sortColors = function(nums) {
    return nums.sort((a,b) => a - b)
};

//PSEUDO:
//make an object that is sortable to tag the colors ie {
// 0: 0,
// 1: 1,
// 3: 3,
//}

//just sort already done