//from leetcode: easy: https://leetcode.com/problems/binary-search/

// var search = function(nums, target) {
//     if (!nums.includes(target)) {
//         return -1
//     }
    
//     return nums.indexOf(target);
// };

// var search = function(nums, target) {
//     //loop nums to check if target is in there
//     return nums.indexOf(target);
// };

//did above in less than a min using build in fncs, will now try to do without them
//edge cases: 1 num in nums, 
//?'s: limits on time/space?

//PSEUDO:

//loop nums
//if nums[i] === target:
//return i

//outside of loop return -1

// var search = function(nums, target) {
//     //loop nums to check if target is in there
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }
    
//     return -1
// };

//REFACTOR to actually use binary search:

// var search = function(nums, target) {
//     //loop nums to check if target is in there
//     let left = 0;
//     let right = nums.length - 1;
//     let pivot = Math.floor((left + right) / 2);
    
//     if (!nums.includes(target)) {
//         return -1;
//     }
    
//     while (nums[pivot] !== target) {
//     if (target > nums[pivot]) {
//         left = pivot + 1;
//         pivot = Math.floor((left + right) / 2)
//     } else {
//         right = pivot - 1;
//         pivot = Math.floor((left + right) / 2)
//     }
//     }
           
//     return pivot;
    
// };


var search = function(nums, target) {
    //loop nums to check if target is in there
    let left = 0;
    let right = nums.length - 1;
    
 while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (target === nums[pivot]) {
        return pivot
    }
    if (target > nums[pivot]) {
        left = pivot + 1;
    } else {
        right = pivot - 1;
    }
    }
           
    return -1;
    
};



