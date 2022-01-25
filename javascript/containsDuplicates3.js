// from leetcode medium https://leetcode.com/problems/contains-duplicate-iii/

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    //set array to hold indices that pass the test
    const indices = [];
    
    //double loop nums and check if the indices meet the guidelines
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                indices.push(i);
                indices.push(j);
            }
        }
    }
    if (indices.length >= 2) {
        return true;
    }

    return false;
};

//PSEUDO:
//cases:
//more than 2 indices where...
//not 2 indices where...

//set indices = []
//double loop nums (j = i+1)
//if (nums[i] - nums[j] <= t && Math.abs(i - j) <= k) {
//indices.push(i);
//indices.push(j);
//}


//out of loop:
//if (indices.length === 2) {
//return true;
//}

//return false;