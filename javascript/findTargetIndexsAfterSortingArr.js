// from leetcode easy: https://leetcode.com/problems/find-target-indices-after-sorting-array

var targetIndices = function(nums, target) {
    //sort nums and set tI to push indexs in memory
    nums.sort((a,b) => a-b);
    const tI = [];
    
    //loop nums and push i if t[i] === target
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            tI.push(i);
        }
    }
    
    return tI;
};

//PSEUDO:
//nums.sort((a,b) => a-b);

//set t = [];

//loop nums
//if (nums[i] === target) {
//tI.push(i)
//}

//return tI;