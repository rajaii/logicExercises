//  from leetcode medium: https://leetcode.com/problems/3sum

var threeSum = function(nums) {
  nums.sort((a,b) => a - b);
  const ret = [];
   
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i-1]) {
          continue;
      }
      let left = i + 1;
      let right = nums.length - 1;
      
      while (right > left) {     
          if (nums[i] + nums[left] + nums[right] === 0) {
              ret.push([nums[i], nums[right], nums[left]]);
              left += 1;
              while (nums[left] === nums[left - 1] && right > left) {
                  left += 1;
              }
          }
          
          if (nums[i] + nums[left] + nums[right] < 0) {
               left += 1;
              continue;
          }
          
          if (nums[i] + nums[left] + nums[right] > 0) {
              right -= 1;
              continue;
          }
      }
      
  } 
   
  return ret;
};

