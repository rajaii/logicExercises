//  from leetcode medium: https://leetcode.com/problems/majority-element-ii/

var majorityElement = function(nums) {
  if (nums.length === 1) {
      return nums;
  }
  const limit = nums.length / 3;
  nums.sort((a,b) => a - b);

  const elements = [];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i-1]) {
          if (count > limit) {
              elements.push(nums[i -1]);
          }
          count = 0;
      }

      count += 1;

      if (i === nums.length - 1 && count > limit && !elements.includes(nums[i])) {
          elements.push(nums[i]);
      } 


  }

  return elements;
};