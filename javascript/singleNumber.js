//from leetcode easy https://leetcode.com/problems/single-number

var singleNumber = function(nums) {
    //sort the array
    nums.sort((a, b) => a -b);

    //loop checking for 1 whose next item is not identical and return that
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] != nums[i] && nums[i-1] != nums[i]) {
            return nums[i];
        }
    }
}

//edge cases: nums.length == 1, large with the 1 at end, the 1 at beginning large
//?'s: will there always be one

//PSEUDO:
//sort array,
//loop
//if a[i+1] != a[i]
//return a[i]