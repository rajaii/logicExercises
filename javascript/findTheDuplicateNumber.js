//  from leetcode: medium: https://leetcode.com/problems/find-the-duplicate-number/

//  Brute force:

var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
              return nums[i];
          }
      }
  }
};