//from leetcode easy https://leetcode.com/problems/number-of-good-pairs

var numIdenticalPairs = function(nums) {
    //set goodPairs variable to iterate as nums[i] === nums[j]
    let goodPairs = 0;
    
    //double loop nums starting at i + 1 for j.  iterate goodPairs if nums[i] === nums[j]
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                goodPairs += 1;
            }
        }
    }
    
    return goodPairs;
};

//edge cases: all same num[i], nums.length == 1, all same nume[i] except 1st larger
//?'s: limits on time, space? 

//PSEUDO:

//set goodPairs = 0;

//loop nums (double loop)
//if nums[i] === nums[j] => goodPairs += 1

//return goodPairs