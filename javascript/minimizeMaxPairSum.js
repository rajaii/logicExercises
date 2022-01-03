//  from leetcode medium : https://leetcode.com/problems/minimize-maximum-pair-sum-in-array

var minPairSum = function(nums) {
    //set the vars for sums and sort nums
    nums.sort((a,b) => a - b);
    const sums = [];
    
    //loop to half pushing in the product of nums[i] * nums[nums.length - 1 - i]
    let half;
    if (nums.length % 2 === 0) {
    half = nums.length / 2;
    } else {
    half = Math.floor(nums.length / 2);
    }
    
    for (let i = 0; i < half; i++) {
        sums.push(nums[i] + nums[nums.length - 1 - i]);
    }
    
    return Math.max(...sums)
};

//PSEUDO:
//sort nums
//set sums = []
//sum pairs from smallest to largest

//set half
//if (nums.length % 2 === 0) {
//half = nums.length / 2;
//} else {
//half = Math.floor(nums.length / 2);
//}

//loop to half pushing into sums: 
//nums[i] * nums[nums.length - 1 - i]

//return Math.max(...sums)