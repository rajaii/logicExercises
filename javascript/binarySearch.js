//from leetcode: easy: https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
  if (nums.length === 1 && target === nums[0]) {
      return 0;
  }
  
  let mid= Math.floor(nums.length / 2);
  let high = nums.length - 1;
  let low = 0;

  while (low < high) {
      if (target === nums[mid]) {
          return mid;
      }
      if (low === high - 1) {
          if (target !== nums[low] && target !== nums[high]) {
              return - 1;
          }
          if (target === nums[low]) {
              return low;
          }

          if (target === nums[high]) {
              return high;
          }
          
      } 
      if (target > nums[mid]) {
          low = mid;
      } else if (target < nums[mid]) {
          high = mid;
      }
      mid = Math.floor((high + low) / 2);
  }

  return -1;
};

//refactor after study:

var search = function(nums, target) {
    
  let mid= Math.floor(nums.length / 2);
  let high = nums.length - 1;
  let low = 0;

  while (low <= high) {
      if (target === nums[mid]) {
          return mid;
      }
      if (target > nums[mid]) {
          low = mid + 1;
      } else if (target < nums[mid]) {
          high = mid - 1;
      }
      mid = Math.floor((high + low) / 2);
  }

  return -1;
};





