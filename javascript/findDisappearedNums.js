//  from leetcode easy: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    //set the memory needed
    const disappeared = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            disappeared.push(i);
        }
    }
    
    return disappeared;
};


//make array [1,n]
//loop nums
//if !array[1,n].includes(nums[i]) {
//disappeared.push(nums[i])
//}

//refactor to o(n) 
var findDisappearedNumbers = function(nums) {
    //set the memory needed
    const disappeared = [];
    const htNums = {};
    const htOneToN = {};
    
    for (let i = 1; i <= nums.length; i++) {
        htOneToN[i] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        htNums[nums[i]] = nums[i];
    }
    
    for (let key in htOneToN) {
        if (htNums[key] === undefined) {
            disappeared.push(htOneToN[key]);
        }
    }
    
    return disappeared;
};