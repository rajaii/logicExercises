//  from leetcode medium: https://leetcode.com/problems/find-triangular-sum-of-an-array

var triangularSum = function(nums) {
  //loop while length > 0 and run steps to adjust
  while (nums.length > 1) {
      const newNums = [];
      for (let i = 0; i < nums.length - 1; i++) {
          newNums.push((nums[i] + nums[i+1]) % 10)
      }
      nums = newNums;
  }
  
  return nums[0];
};

//PSEUDO:

//loop while length > 0 and run steps to adjust
//while (nums.length > 1) {
//const newNums = [];
//for (let i = 0; i < nums.length - 1; i++) {
//newNums.push((nums[i] + nums[i+1]) % 10)
//}
//nums = newNums;
//}


//out of loop
//return nums[0]