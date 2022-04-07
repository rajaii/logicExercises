//from leetcode easy: https://leetcode.com/problems/find-all-k-distant-indices-in-an-array

var findKDistantIndices = function(nums, key, k) {
    //set the array to push into and return
    const kDistanceIndexs = [];
    
    //double loop nums j = 0 and check the conditions pushing and breaking inner loop if it is met
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
             if (Math.abs(i - j) <= k && nums[j] == key) {
                kDistanceIndexs.push(i);
                break;
            }
        }
    }
    
    return kDistanceIndexs;
};

//Edge case: can i === j ?

//PSEUDO:
//set kDistanceIndexs = [];
//loop nums ascending (so is sorted)
//double loop nums j === 0, then if doesn't work because of shitty instructions skip j === 1
//if (Math.abs(i - j) <= k && nums[j] == key) {
//kDistanceIndexs.push(i);
//break;
//}


//out of loops:
//return kDistanceIndexs;