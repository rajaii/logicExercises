//  from leecode med: https://leetcode.com/problems/longest-consecutive-sequence

var longestConsecutive = function(nums) {
    if (nums.length === 0) {
       return 0;
   }
   
   if (nums.length === 1 || nums.every(n => n === nums[0])) {
       return 1;
   }
   
   const n = new Set();
   
   //make set
   for (let i = 0; i < nums.length; i++) {
       n.add(nums[i]);
   }
   
   //loop nums and check
   let count = 1;
   let max = 0;
   for (let i = 0; i < nums.length; i++) {
       if (n.has(nums[i] - 1)) {
           continue;
       } else {
           if (n.has(nums[i] + 1)) {
               count += 1;
               let temp = nums[i] + 1;
               for (let j = 0; j < nums.length; j++) {
                   // temp += 1;
                   if (n.has(temp + 1)) {
                       count += 1;
                       temp += 1;
                       continue;
                   } else {
                       if (count > max) {
                           max = count;
                           count = 1;
                           break;
                       } else {
                           count = 1; 
                           break;
                       }
                   }
               }
           }
       }
   }
   
   return max || 1;
};