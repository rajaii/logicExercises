//from leetcode easy: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/submissions/

var specialArray = function(nums) {
    //handle edge cases
    if (nums.length === 1 && nums[0] > 0) {
        return 1;
    } else if (nums.length === 1 && nums[0] === 0) {
        return -1;
    } else if (nums[0] === nums.length && nums.every(n => n === nums[0])) {
      return nums[0];        
    } else if (nums[0] === 0 && nums.every(n => n === nums[0])) {
        return -1;
    } else {
        
    //double loop through nums and increment counter if nums[i] >= x return -1 outside of loop
    //return i if at end of a nested loop and counter = i + 1
    let counter = 0;
    for (let i = 0; i < nums.length; i++) { /// i + 1 and num j - 1
        for (let j = 0; j < nums.length; j++) {
            if (counter > i + 1) {
                counter = 0;
                break;
            } else if (j === nums.length -1) {
               if (nums[j] >= i + 1) {
                   counter += 1;
                   if (counter === i + 1) {
                       return i + 1;
                   } else {
                       counter = 0;
                   }
               } else if (counter === i + 1) {
                   return i + 1;
               } else {
                   counter = 0;
               }
            }
            else if (nums[j] >= i + 1) {
                counter += 1;
            }
        }
    }
        
        return -1;
     
    
    }
};

//edge cases: nums.length === 1, all 0's large length, all same val
//?'s: limits on time/space? 

//Pseudo:

//double loop to check if excactly x elements in nums[i] >= each nums[i]
//increment counter
// x = nums[i]
//if counter goes over, break, if under at end x = 0
// go through whole thing and if at end and counter === x return counter

//outside loop return -1
