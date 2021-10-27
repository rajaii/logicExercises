//  from leetcode easy: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

var areNumbersAscending = function(s) {
    //split s into an array and set emtpy nums
    const a = s.split(' ');
    const nums = [];
    
    //loop a and if !isNaN(parseInt(a[i])) push into nums
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(parseInt(a[i]))) {
            nums.push(parseInt(a[i]));
        }
    }
    
    let cur = nums[0];
    //loop nums starting at 1 and if nums[i] <= cur ret false else set cur to nums[i]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= cur) {
            return false;
        } else {
            cur = nums[i];
        }
    }
    
    return true;
};

//edge cases:

//PSEUDO:

//set a = s.split(' ');
//set nums = [];
//loop a and if !isNaN(parseInt(a[i])) push into nums

//set cur = nums[0]
//loop nums starting at 1 and if nums[i] <= cur {
//return false
//} else {
//cur = nums[i]
//}

//return true