// from leetcode: easy https://leetcode.com/problems/min-max-game

var minMaxGame = function(nums) {
  //loop while nums.length > 1 && run ops
  while (nums.length > 1) {
      const newNums = [];
      newNums.length = nums.length / 2;
      
      for (let i = 0; i < newNums.length; i++) {
          if (i % 2 === 0) {
              const first = nums[2 * i], second = nums[2 * i + 1]; 
              newNums[i] = Math.min(first, second)
          } else {
              const first = nums[2 * i], second = nums[2 * i + 1];
              newNums[i] = Math.max(first, second);
          }
      }
      nums = newNums;
  }
  
  
  return nums;
};