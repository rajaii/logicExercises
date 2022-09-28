//  from leetcode easy: https://leetcode.com/problems/contains-duplicate

//first pass o (n log n):
var containsDuplicate = function(nums) {
  //sort nums
  nums.sort((a,b) => a - b);
  
  //loop nums if nums[i] == nums[i-1]  => return true
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i-1]) {
          return true;
      }
  }
  
  return false;
};

//PSEUDO

//sort nums
//loop nums if nums[i] == nums[i-1]  => return true

//out of loop return false

//refactor to o(n)

var containsDuplicate = function(nums) {
  //make object
  let counts = {}
  
  //loop nums if nums[i] == nums[i-1]  => return true
  for (let i = 0; i < nums.length; i++) {
      if (counts[nums[i]]) {
          return true;
      }
      
      counts[nums[i]] = 1;
  }
  
  return false;
};

//PSEUDO

//sort nums
//loop nums if nums[i] == nums[i-1]  => return true

//out of loop return false
