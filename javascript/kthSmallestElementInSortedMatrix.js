//  from leetcode mediium: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

var kthSmallest = function(m, k) {
  let a = [];

  // loop matrix and push all into a
  for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
         a.push(m[i][j]);
      }
  }

  //sort a
  a.sort((a,b) => a - b);

  return a[k-1];
};

