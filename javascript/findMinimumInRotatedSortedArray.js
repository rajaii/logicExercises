//  from leetcode medium: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

var findMin = function(n) {
  let l = 0
  let r = n.length - 1;
  let mid = Math.floor((l+r) / 2); 
  let min = n[mid];
  
  while (l <= r) {
      if (n[r] > n[l]) {
          if (n[l] < min) {
              min = n[l];
          }
          break;
      }
      if (n[mid] >= n[l]) {
          l = mid + 1;
          mid = Math.floor((l+r) / 2);
          if (Math.min(n[l],n[r],n[mid]) < min) {
              min = Math.min(n[l],n[r],n[mid]);
          }  
          continue;
      } else {
          r = mid - 1;
          mid = Math.floor((l+r) / 2);
          if (Math.min(n[l],n[r],n[mid]) < min) {
              min = Math.min(n[l],n[r],n[mid]);
          }  
          continue;
      }
  }
  return min
};