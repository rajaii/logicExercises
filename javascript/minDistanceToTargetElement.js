//  from leetcode easy: https://leetcode.com/problems/minimum-distance-to-the-target-element

var getMinDistance = function(nums, target, start) {
    //  set index's in memory
    let min = Infinity;
    const indexs = [];
    
    //  loop nums and pull out the index's of all nums[i] that === target
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            indexs.push(i);
        }
    }
    
    //  loop indexs and set min to Math.abs(index's[i] - start) if less than min
    for (let i = 0; i < indexs.length; i++) {
        if (Math.abs(indexs[i] - start) < min) {
            min = Math.abs(indexs[i] - start);
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