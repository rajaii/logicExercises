//  from leetcode easy: https://leetcode.com/problems/search-a-2d-matrix

//brute force: no pseudo needed:
var searchMatrix = function(array, target) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] === target) {
              return true
          }
      }
  }

  return false;
};