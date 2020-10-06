//from leetcode easy https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function(nums) {
    //set the incrementor to add to each num[i] and the retArr to push into and then return
    let inc = 0;
    let retArr = [];
    
    //loop nums and add each num[i] to incrementor and push that sum into retArr and then       //add nums[i] to incrementor
    for (let i = 0; i < nums.length; i++) {
        retArr.push(nums[i] + inc);
        inc += nums[i];
    }
    
    
    
    return retArr;
};

//edge cases: nums.length === 1
//?'s:

//set inc = 0
//set retArr = []

//loop nums
//retArr.push(inc + nums[i])
//inc += nums[i]

//return retArr