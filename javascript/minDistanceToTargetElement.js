//  from leetcode easy: https://leetcode.com/problems/minimum-distance-to-the-target-element

var getMinDistance = function(nums, target, start) {
    //  set min in memory
    let min = Infinity;
    
    //  loop nums and if nums[i] is target check and see if it's abs diff from start     //  is less than min and set min to that if so
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && Math.abs(i - start) < min) {
            min = Math.abs(i - start);
        }
    }
    
    
    return min;
};

//  edge cases: 1 num, 
//  Pseudo:

//  const indexs = []; 
//  loop nums and pull out the index's of all nums[i] that === target
//  let min = Infinity;
//  loop indexs and set min to Math.abs(index's[i] - start) if less than min

//  return min