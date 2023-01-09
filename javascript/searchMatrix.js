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

//refactor to o(log n):d


var searchMatrix = function(array, target) {
  if (array[0].length === 1) {
      let left = 0;
      let right = array.length - 1;
      let mid = Math.floor((left + right) /2);
      while (left <= right) {
          if (target === array[mid][0]) {
              return true;
          }
          if (target < array[mid][0]) {
              right = mid - 1;
              mid = Math.floor((left + right) /2);
              continue;
          }
          else if (target > array[mid][0]) {
              left = mid + 1;
              mid = Math.floor((left + right) /2);
          }
      }
      return false;
  }

  //run binary search on outer level to find targetArray
  let targetArray;
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) /2);
  while (left < right) {
      if (target < array[mid][0]) {
          right = mid - 1;
          mid = Math.floor((left + right) /2);
          continue;
      }
      else if (target > array[mid][array[mid].length - 1]) {
          left = mid + 1;
          mid = Math.floor((left + right) /2);
      }
      else {
          break;
      }
  }

  targetArray = array[mid];
  if (targetArray === undefined) {
      return false;
  }
  //run binary search on targetArray to find value
  left = 0; 
  right = targetArray.length - 1;
  mid = Math.floor((left + right) /2);
  while (left <= right) {
      if (target === targetArray[mid]) {
          return true;
      }
      if (target < targetArray[mid]) {
          right = mid - 1;
          mid = Math.floor((left + right) /2);
          continue;
      }
      if (target > targetArray[mid]) {
          left = mid + 1;
          mid = Math.floor((left + right) /2);
      }
  }

  return false;


};
//edge case: if only one in there just binary search the outer level to see which array[i][0] === target

//PSEUDO: for n log n
//let targetArray;
//set mid array, high array, low array
//binary search the first level until array[i][0] < target && array[i][array[i].length -1] > target

//when you have the target array, run a binary search on it



