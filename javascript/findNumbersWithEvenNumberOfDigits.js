//  from leetcode easy: https://leetcode.com/problems/find-numbers-with-even-number-of-digits

var findNumbers = function(nums) {
    //set evens
    let evens = 0;
    
    //loop nums and then nums[i].toString() and count number of digits each num has incrementing evens       //accordingly
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            evens += 1;
        }
     }
    
    
    return evens;
};

//refactor using .reduce
var findNumbers = function(nums) {
    return nums.reduce((p, c, i) => {
        if (nums[i].toString().length % 2 === 0) {
            return p + 1;
        } else {
            return p;
        }
    }, 0)
};

//PSEUDO:
//set evens = 0
//loop nums
//set a counter = 0
//loop nums[i].toString();
//count number of digits in nums[i].toString()[j]
//at end if even increment evens

//return evens

//rethought when coding:
//nix the double loop just tag the length of nums[i].toString()