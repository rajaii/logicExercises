//  from leetcode easy: https://leetcode.com/problems/maximum-product-difference-between-two-pairs

var maxProductDifference = function(nums) {
    //  get the max's out
    const max = Math.max(...nums);
    nums.splice(nums.indexOf(max), 1);
    const max2 = Math.max(...nums);
    nums.splice(nums.indexOf(max2), 1);
    
    //  get the mins out
    const min = Math.min(...nums);
    nums.splice(nums.indexOf(min), 1);
    const min2 = Math.min(...nums);
    
    return (max * max2) - (min * min2);
};

//edge cases: duplicates


//PSEUDO:
//find the highest 2 
//find the lowest 2

//return prod(highest 2) - prod(lowest 2)