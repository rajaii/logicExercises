//  from leetcode easy: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

var minOperations = function(nums) {
    //. set count and loop array incrementing the nums and count if nums[i] <= the one before it
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        while(nums[i] <= nums[i-1]) {
            nums[i] += 1;
            count += 1; 
        }
    }
    
    return count;
};

//let count = 0;
//loop array
// while (nums[i] <= nums[i - 1]) {
//nums[i] ++;
//count += 1;
//}


var minOperations = function(nums) {
    //. set count and loop array incrementing the nums and count if nums[i] <= the one before it
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count += 1;
            nums[i] += 1;  
        } else if (nums[i] < nums[i - 1]) {
            count += ((nums[i - 1] - nums[i]) + 1);
            nums[i] += ((nums[i - 1] - nums[i]) + 1);
        }
    }
    
    return count;
};



// refactor
//loop through
//if (nums[i] === nums[i - 1]) {
//count += 1;
//} else if (nums[i] < nums[i - 1]) {
//count += ((nums[i - 1] - nums[i]) + 1)
//}